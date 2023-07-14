import {logoutEndpoint} from '../endpoints';
import * as request from '../request';

export async function logout(): Promise<Response> {
  return (
    request
      // Attempt basic auth with the given username & password
      .fireAuthenticatedRequest(logoutEndpoint, request.RequestMethod.POST, {})
  );
}
