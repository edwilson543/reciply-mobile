import * as request from '../request';
import * as constants from '../constants';
import * as exceptions from '../exceptions';
import {AuthEndpoint} from './constants';

export async function logout(): Promise<void> {
  return (
    request
      // Attempt basic auth with the given username & password
      .fireAuthenticatedRequest(
        AuthEndpoint.Logout,
        request.RequestMethod.POST,
        {},
        {},
      )
      // Throw a useful exception if the username & password are invalid
      .then(response => {
        if (response.status === constants.StatusCode.Unauthorized) {
          throw new exceptions.UnauthorizedError('Unauthorized');
        } else {
          return;
        }
      })
  );
}
