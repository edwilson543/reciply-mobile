import * as storage from '../../storage';
import {APILocation} from '../endpoints';
import * as exceptions from '../exceptions';

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
      'Content-type': contentType,
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
