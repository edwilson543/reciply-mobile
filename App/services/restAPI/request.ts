import * as constants from './constants';
import * as storage from '../storage';
import * as exceptions from './exceptions';

export function postRequest(
  /** Basic POST request to the API. */
  url: string,
  payload: object,
  headers: object,
): Promise<Response> {
  const request = {
    method: 'POST',
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

export function authenticatedPostRequest(
  /** POST request to the API using token authentication. */
  url: string,
  payload: object,
): Promise<Response> {
  const authToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  if (!authToken) {
    // Don't bother making an API request when we don't have an auth token
    throw new exceptions.UnauthorizedError(
      'No auth token available in storage!',
    );
  }
  const headers = {Authorization: `token: ${authToken}`};
  return postRequest(url, payload, headers);
}
