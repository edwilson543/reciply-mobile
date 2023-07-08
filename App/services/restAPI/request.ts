import * as constants from './constants';
import * as storage from '../storage';
import * as exceptions from './exceptions';

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}

const defaultHeaders = {
  'Content-type': 'application/json',
};

export async function fireRequest(
  /** Basic POST request to the API. */
  url: string,
  method: RequestMethod,
  headers: object,
  payload: object,
): Promise<Response> {
  const request = {
    method: method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: JSON.stringify(payload),
  };
  const absoluteUrl = constants.APILocation + url;
  try {
    return fetch(absoluteUrl, request);
  } catch (error) {
    throw new exceptions.FetchError(`Error making request: ${error}`);
  }
}

export async function fireAuthenticatedRequest(
  /** POST request to the API using token authentication. */
  url: string,
  method: RequestMethod,
  headers: object,
  payload: object,
): Promise<Response> {
  const authToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  const combinedHeaders = {
    ...defaultHeaders,
    ...headers,
    Authorization: `token: ${authToken}`,
  };
  if (!authToken) {
    // Don't bother making an API request, we know it would just get a 401
    throw new exceptions.UnauthorizedError(
      'No auth token available in storage!',
    );
  }
  return fireRequest(url, method, combinedHeaders, payload);
}
