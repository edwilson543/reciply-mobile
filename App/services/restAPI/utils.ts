import * as constants from './constants';
import * as auth from '../../context/auth';

// Exceptions

class FetchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchError';
  }
}

// Requests

export function postRequest(
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
    throw new FetchError(`Error connecting to network: ${error}`);
  }
}

export function useAuthenticatedPostRequest(
  url: string,
  payload: object,
): Promise<Response> {
  const authInfo = auth.useAuth();
  const headers = {Authorization: `token: ${authInfo.token}`};
  return postRequest(url, payload, headers);
  // TODO -> dispatch logout action follow a 401 (token expired)
}
