import {RequestMethod, fireAuthenticatedRequest} from './client';

export async function deleteData(url: string): Promise<Response> {
  return fireAuthenticatedRequest(url, RequestMethod.DELETE);
}
