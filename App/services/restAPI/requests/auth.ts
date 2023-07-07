import * as utils from '../utils';
import * as auth from '../../../context/auth';
import * as constants from '../constants';

// Constants

enum AuthEndpoint {
  Login = 'login/',
}

// Login

interface LoginSuccessPayload {
  token: string;
}

interface LoginErrorPayload {
  detail: string;
}

class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export function useLogin(username: string, password: string): void {
  const authDispatch = auth.useAuthDispatch();
  const headers = {
    Authorization:
      'Basic ' + Buffer.from(username + ':' + password).toString('base64'),
  };

  utils
    // Attempt basic auth with the given username & password
    .postRequest(AuthEndpoint.Login, {}, headers)
    // Throw a useful exception if the username & password are invalid
    .then(response => {
      if (response.status === constants.StatusCode.Unauthorized) {
        const error = response.json() as unknown as LoginErrorPayload;
        throw new UnauthorizedError(error.detail);
      } else {
        return response;
      }
    })
    // Store the returned user token in the global context
    .then(response => {
      const data = response.json() as unknown as LoginSuccessPayload;
      authDispatch({
        type: auth.AuthAction.Login,
        token: data.token,
      });
    });
}
