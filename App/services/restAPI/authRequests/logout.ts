import {logoutEndpoint} from '../endpoints';
import * as request from '../request';

export async function logout(): Promise<Response> {
  return request.fireAuthenticatedRequest(
    logoutEndpoint,
    request.RequestMethod.POST,
  );
}
