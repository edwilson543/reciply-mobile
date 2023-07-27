import {Buffer} from 'buffer';

import * as request from '../client';
import {fireRequest, RequestMethod} from '../client';
import * as constants from '../constants';
import {loginEndpoint, logoutEndpoint, registerEndpoint} from '../endpoints';
import * as exceptions from '../exceptions';
import {LoginSuccessPayload} from '../payloads';

export async function login(
  username: string,
  password: string,
): Promise<LoginSuccessPayload> {
  const headers = {
    Authorization:
      'Basic ' + Buffer.from(username + ':' + password).toString('base64'),
  };
  return (
    request
      // Attempt basic auth with the given username & password
      .fireRequest(loginEndpoint, request.RequestMethod.POST, headers)
      // Throw a useful exception if the username & password are invalid
      .then(response => {
        if (response.status === constants.StatusCode.Unauthorized) {
          throw new exceptions.UnauthorizedError('Unauthorized');
        } else {
          return response.json() as unknown as LoginSuccessPayload;
        }
      })
  );
}

export async function register(formData: FormData): Promise<Response> {
  return fireRequest(registerEndpoint, RequestMethod.POST, {}, formData);
}

export async function logout(): Promise<Response> {
  return request.fireAuthenticatedRequest(
    logoutEndpoint,
    request.RequestMethod.POST,
  );
}
