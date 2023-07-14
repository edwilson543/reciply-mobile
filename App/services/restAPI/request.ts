import {useEffect, useState} from 'react';

import {APILocation} from './endpoints';
import * as exceptions from './exceptions';
import * as storage from '../storage';

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}

const defaultHeaders = {
  'Content-type': 'application/json',
};

export async function fireRequest(
  /** Basic HTTP request to the API. */
  url: string,
  method: RequestMethod,
  headers: object,
  payload?: object,
): Promise<Response> {
  const body = payload && JSON.stringify(payload);
  const request = {
    method: method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: body,
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
  payload?: object,
): Promise<Response> {
  const authToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  const headers = {
    ...defaultHeaders,
    Authorization: `Token ${authToken}`,
  };
  if (!authToken) {
    // Don't bother making an API request, we know it would just get a 401
    throw new exceptions.UnauthorizedError(
      'No auth token available in storage!',
    );
  }
  return fireRequest(url, method, headers, payload);
}

function useData<ResponseData>(
  url: string,
  method: RequestMethod,
  payload?: object,
): {data: ResponseData | null; isLoading: boolean} {
  /** Request some resource and store the response and progress in state. */
  const [data, setData] = useState<ResponseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fireAuthenticatedRequest(url, method, payload)
      .then(response => {
        return response.json() as unknown as ResponseData;
      })
      .then(responseData => setData(responseData))
      .then(() => setIsLoading(false));
  }, [method, payload, url]);

  return {data, isLoading};
}

export function useGetData(url: string): {data: null; isLoading: true};
export function useGetData<ResponseData>(url: string): {
  data: ResponseData;
  isLoading: false;
};
export function useGetData<ResponseData>(url: string): {
  data: ResponseData | null;
  isLoading: boolean;
} {
  return useData<ResponseData>(url, RequestMethod.GET);
}

export function usePostData(
  url: string,
  payload: object,
): {data: null; isLoading: true};
export function usePostData<ResponseData>(
  url: string,
  payload: object,
): {data: ResponseData; isLoading: false};
export function usePostData<ResponseData>(
  url: string,
  payload: object,
): {
  data: ResponseData | null;
  isLoading: boolean;
} {
  return useData<ResponseData>(url, RequestMethod.POST, payload);
}
