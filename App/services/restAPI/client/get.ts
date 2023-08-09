import {SetStateAction, useState, useEffect} from 'react';

import {useIsFocused} from '@react-navigation/native';
import {LayoutAnimation} from 'react-native';

import {fireAuthenticatedRequest, RequestMethod} from './client';
import {opacityAnimConfig} from '../../../animations';
import * as constants from '../constants';

export function useGetData<ResponseData>(url: string): {
  data: ResponseData | null;
  setData: React.Dispatch<SetStateAction<ResponseData | null>>;
  friendlyErrors: Errors | null;
  isLoading: boolean;
  onRefresh: () => void;
} {
  /** Request some resource and store the response and progress in state. */
  const [data, setData] = useState<ResponseData | null>(null);
  const [friendlyErrors, setFriendlyErrors] = useState<Errors | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const isFocused = useIsFocused();

  // Refresh the data when navigating (back) to the screen this hook is called from.
  useEffect(() => {
    if (isFocused) {
      setIsLoading(true);
      LayoutAnimation.configureNext(opacityAnimConfig);
      fireAuthenticatedRequest(url, RequestMethod.GET)
        .then(response => {
          if (response.status >= constants.StatusCode.BadRequest) {
            response.json().then(errors => setFriendlyErrors(errors as Errors));
          } else {
            response
              .json()
              .then(responseData => setData(responseData as ResponseData));
          }
        })
        .then(() => setIsLoading(false))
        .then(() => LayoutAnimation.configureNext(opacityAnimConfig))
        // Any server or authorization error gets a generic response
        .catch(() =>
          setFriendlyErrors({
            error: ['An unexpected error occurred. Please try again later.'],
          }),
        );
    }
  }, [url, isFocused, refreshKey]);

  function onRefresh() {
    setRefreshKey(key => key + 1);
  }

  return {
    data,
    setData,
    friendlyErrors,
    isLoading: isLoading && !data,
    onRefresh,
  };
}

interface Errors {
  [index: string]: Array<string>;
}
