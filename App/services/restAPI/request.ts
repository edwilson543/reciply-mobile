import * as constants from './constants';
import * as storage from '../storage';
import * as exceptions from './exceptions';

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}

export function fireRequest(
  /** Basic POST request to the API. */
  url: string,
  method: RequestMethod,
  payload: object,
  headers: object,
): Promise<Response> {
  const request = {
    method: method,
    headers: {
      'Content-type': 'application/json',
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

export function fireAuthenticatedRequest(
  /** POST request to the API using token authentication. */
  url: string,
  method: RequestMethod,
  payload: object,
): Promise<Response> {
  const authToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  if (!authToken) {
    // Don't bother making an API request, we know it would just get a 401
    throw new exceptions.UnauthorizedError(
      'No auth token available in storage!',
    );
  }
  const headers = {Authorization: `token: ${authToken}`};
  return fireRequest(url, method, payload, headers);
}
