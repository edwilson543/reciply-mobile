import {fireAuthenticatedRequest, RequestMethod} from './client';
import {StatusCode} from '../constants';

export interface successResponse<Data> {
  data: Data;
  errors: null;
}

export interface errorResponse<Errors> {
  data: null;
  errors: Errors;
}

export async function postData<Data, Errors>(
  url: string,
  payload: FormData,
  isUpload: boolean = false,
): Promise<successResponse<Data> | errorResponse<Errors>> {
  return fireAuthenticatedRequest(
    url,
    RequestMethod.POST,
    payload,
    isUpload,
  ).then(response => {
    if (response.status >= StatusCode.BadRequest) {
      return response.json().then((errors: Errors) => {
        return {data: null, errors: errors};
      });
    } else {
      return response.json().then((data: Data) => {
        return {data: data, errors: null};
      });
    }
  });
}
