import {Buffer} from 'buffer';

import * as request from '../client';
import {fireRequest, RequestMethod} from '../client';
import * as constants from '../constants';
import {loginEndpoint, logoutEndpoint, registerEndpoint} from '../endpoints';
import * as exceptions from '../exceptions';
import {LoginSuccessPayload} from '../payloads';

export const login = async (
  username: string,
  password: string,
): Promise<LoginSuccessPayload> => {
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
};

export const register = async (formData: FormData): Promise<Response> => {
  return fireRequest(registerEndpoint, RequestMethod.POST, {}, formData);
};

export const logout = async (): Promise<Response> => {
  return request.fireAuthenticatedRequest(
    logoutEndpoint,
    request.RequestMethod.POST,
  );
};
