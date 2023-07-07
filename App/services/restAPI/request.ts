import * as constants from './constants';
import * as auth from '../../context/auth';
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

export function useAuthenticatedPostRequest(
  /** POST request to the API using token authentication. */
  url: string,
  payload: object,
): Promise<Response> {
  const authInfo = auth.useAuth();
  const headers = {Authorization: `token: ${authInfo.token}`};
  return postRequest(url, payload, headers);
  // TODO -> dispatch logout action follow a 401 (token expired)
}
