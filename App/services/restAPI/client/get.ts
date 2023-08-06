import {SetStateAction, useEffect, useState} from 'react';

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

  useEffect(() => {
    setIsLoading(true);
    let isError = false;
    fireAuthenticatedRequest(url, RequestMethod.GET)
      .then(response => {
        isError = response.status >= constants.StatusCode.BadRequest;
        return response.json() as unknown;
      })
      .then(responseData => {
        if (isError) {
          // Cast the response to the error type
          setFriendlyErrors(responseData as Errors);
        } else {
          // Cast the response data to the generic type
          setData(responseData as ResponseData);
        }
      })
      .then(() => setIsLoading(false))
      // Any server or authorization error gets a generic response
      .catch(() =>
        setFriendlyErrors({
          error: ['An unexpected error occurred. Please try again later.'],
        }),
      );
  }, [url, refreshKey]);

  return {data, setData, friendlyErrors, isLoading};
}

interface Errors {
  [index: string]: Array<string>;
}
