import {Buffer} from 'buffer';

import * as constants from '../constants';
import {loginEndpoint} from '../endpoints';
import * as exceptions from '../exceptions';
import * as request from '../request';

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
      .fireRequest(loginEndpoint, request.RequestMethod.POST, headers, {})
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

// Interfaces

interface LoginSuccessPayload {
  token: string;
}
