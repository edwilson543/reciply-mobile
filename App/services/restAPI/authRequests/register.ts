import {registerEndpoint} from '../endpoints';
import {fireRequest, RequestMethod} from '../request';

export async function register(formData: FormData): Promise<Response> {
  return fireRequest(registerEndpoint, RequestMethod.POST, {}, formData);
}
