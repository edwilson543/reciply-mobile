import {useEffect, useState} from 'react';

import * as constants from './constants';
import {APILocation} from './endpoints';
import * as exceptions from './exceptions';
import * as storage from '../storage';

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}

export async function fireRequest(
  /** Basic HTTP request to the API. */
  url: string,
  method: RequestMethod,
  headers: object,
  payload?: FormData,
  isUpload: boolean = false,
): Promise<Response> {
  const contentType = isUpload ? 'multipart/form-data' : 'application/json';
  const request = {
    method: method,
    headers: {
      'Content-Type': contentType,
      ...headers,
    },
    body: payload,
  };
  const absoluteUrl = APILocation + url;
  try {
    return fetch(absoluteUrl, request);
  } catch (error) {
    throw new exceptions.FetchError(`Error making request: ${error}`);
  }
}

export async function fireAuthenticatedRequest(
  /** Authenticated HTTP request to the API using token authentication. */
  url: string,
  method: RequestMethod,
  payload?: FormData,
  isUpload: boolean = false,
): Promise<Response> {
  const authToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  const headers = {
    Authorization: `Token ${authToken}`,
  };
  if (!authToken) {
    // Don't bother making an API request, we know it would just get a 401
    throw new exceptions.UnauthorizedError(
      'No auth token available in storage!',
    );
  }
  return fireRequest(url, method, headers, payload, isUpload);
}

export async function postData(
  url: string,
  payload: FormData,
  isUpload: boolean = false,
): Promise<Response> {
  return fireAuthenticatedRequest(url, RequestMethod.POST, payload, isUpload);
}

export async function deleteData(url: string): Promise<Response> {
  return fireAuthenticatedRequest(url, RequestMethod.DELETE);
}

export function useGetData(
  url: string,
  refreshKey?: number,
): {
  data: null;
  friendlyErrors: null;
  isLoading: true;
};
/** Waiting for response. */
export function useGetData<ResponseData>(
  url: string,
  refreshKey?: number,
): {
  data: ResponseData;
  friendlyErrors: null;
  isLoading: false;
};
/** Successful request. */
export function useGetData(
  url: string,
  refreshKey?: number,
): {
  data: null;
  friendlyErrors: Errors;
  isLoading: false;
};
/** Some error. */
export function useGetData<ResponseData>(
  url: string,
  refreshKey?: number,
): {
  data: ResponseData | null;
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

  return {data, friendlyErrors, isLoading};
}

interface Errors {
  [index: string]: Array<string>;
}
