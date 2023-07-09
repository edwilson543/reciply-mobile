import {StatusCode} from './constants';

export class FetchError extends Error {
  /** An error when using the fetch API (the request could not be made).
   * For example, the specified resource does not exist.
   */
  constructor(message: string) {
    super(message);
    this.name = 'FetchError';
  }
}

export class UnauthorizedError extends Error {
  /** Error for a 401 unauthorized. */
  status_code: StatusCode.Unauthorized;

  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedError';
    this.status_code = StatusCode.Unauthorized;
  }
}
