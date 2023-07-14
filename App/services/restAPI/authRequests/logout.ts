import {AuthEndpoint} from './constants';
import * as request from '../request';

export async function logout(): Promise<Response> {
  return (
    request
      // Attempt basic auth with the given username & password
      .fireAuthenticatedRequest(
        AuthEndpoint.Logout,
        request.RequestMethod.POST,
        {},
      )
  );
}
