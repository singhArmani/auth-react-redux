import { has } from 'lodash';
import * as Types from '../types/auth';
import AuthApi from '../api/auth';
import * as session from '../services/session';
import { redirect } from '../services/redirect';
import appConfig from '../config';

/**
 * Authenticating a user
 *
 * @param  {string} username
 * @param  {string} password
 * @returns {Function}
 */
export function authenticateUser(username, password) {
  return async dispatch => {
    try {
      dispatch(userSigningIn(true));
      const response = await AuthApi.signIn(username, password);

      // Inform redux about successful authentication
      dispatch(authSuccess(response.data.token));

      // Also store token value in the LocalStorage
      session.setToken(response.data.token);

      dispatch(userSigningIn(false));

      // redirecting to the dashboard
      redirect(appConfig.routes.DASHBOARD);
    } catch (err) {
      if (has(err, 'response.data')) {
        dispatch(authError(err.response.data.error));
      } else {
        dispatch(
          authError(
            'Technical Error occured. Check if you are running the auth server!'
          )
        );
      }
    }
  };
}

export function userSigningIn(isUserSigningIn) {
  return {
    type: Types.USER_SIGNING_IN,
    payload: {
      isUserSigningIn: isUserSigningIn
    }
  };
}

/**
 * Authentication Success
 *
 * @param token
 * @returns {object}
 */
export function authSuccess(token) {
  return {
    type: Types.AUTH_SUCCESS,
    payload: {
      token
    }
  };
}

/**
 * Register that an error has occurred with authentication.
 *
 * @param error
 * @returns {object}
 */
export function authError(error) {
  return {
    type: Types.AUTH_ERROR,
    payload: {
      error
    }
  };
}

/**
 * Removing token from redux
 *
 * @returns {object}
 */
export function removeToken() {
  return {
    type: Types.DELETE_TOKEN
  };
}

/**
 * Unauthenticae user
 *
 * @returns {Function} redux-thunk
 */
export function unauthenticate() {
  return function(dispatch) {
    dispatch({
      type: Types.UNAUTH_USER
    });
    // removing token from the redux
    dispatch(removeToken());

    // removing from local storage too
    session.removeToken();
  };
}
