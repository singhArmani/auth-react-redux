import * as Types from "../types/auth";
import AuthApi from "../api/auth";

/**
 * Authenticating a user
 *
 * @param  {string} username
 * @param  {string} password
 * @returns {Function}
 */
export function authenticateUser(username, password) {
  console.log(username, password);
  return async dispatch => {
    try {
      dispatch(userSigningIn(true));
      const response = await AuthApi.signIn(username, password);
      dispatch(authSuccess(response.data.token));
      dispatch(userSigningIn(false));
    } catch (err) {
      dispatch(authError(err.response.data.error));
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
  console.log("error dispatch::::", error);
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
 * @returns {object}
 */
export function unauthenticate() {
  return function(dispatch) {
    dispatch({
      type: Types.UNAUTH_USER
    });
    dispatch(removeToken());
  };
}
