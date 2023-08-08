import {SetStateAction, useEffect, useState} from 'react';

import {useIsFocused} from '@react-navigation/native';
import {LayoutAnimation} from 'react-native';

import {fireAuthenticatedRequest, RequestMethod} from './client';
import * as constants from '../constants';

export function useGetData<ResponseData>(
  url: string,
  refreshKey?: number,
): {
  data: ResponseData | null;
  setData: React.Dispatch<SetStateAction<ResponseData | null>>;
  friendlyErrors: Errors | null;
  isLoading: boolean;
} {
  /** Request some resource and store the response and progress in state. */
  const [data, setData] = useState<ResponseData | null>(null);
  const [friendlyErrors, setFriendlyErrors] = useState<Errors | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setIsLoading(true);
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
        .then(() => LayoutAnimation.configureNext(layoutAnimConfig))
        // Any server or authorization error gets a generic response
        .catch(() =>
          setFriendlyErrors({
            error: ['An unexpected error occurred. Please try again later.'],
          }),
        );
    }
  }, [url, isFocused, refreshKey]);

  return {data, setData, friendlyErrors, isLoading};
}

interface Errors {
  [index: string]: Array<string>;
}

const layoutAnimConfig = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};
