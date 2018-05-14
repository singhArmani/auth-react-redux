import jwtDecode from 'jwt-decode';

import store from '../store';
import * as storage from './storage';
/**
 * Tries to decode jwt and checks the expiration date
 *
 * @param {any} token
 * @returns {boolean}
 */
export function isTokenValid(token) {
  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode(token);
    if (typeof decoded.exp === 'undefined') {
      return false;
    }

    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);

    return date.valueOf() > new Date().valueOf();
  } catch (error) {
    return false;
  }
}

export function isAuthenticated() {
  const token = getToken();
  return isTokenValid(token);
}

/**
 * Sets the token to the local storage
 * @param {any} token
 * @returns {void}
 */
export function setToken(token) {
  if (token) {
    storage.setItem('token', token);
  }
}

/**
 * Retrieves the token from either Redux of Local Storage
 * @returns {boolean|string}
 */
export function getToken() {
  let token;
  // try and get it from the Redux store first
  token = store.getState().auth.token;

  if (token) {
    return token;
  }
  // if not in Redux, try and grab it from local storage
  token = storage.getItem('token');
  if (token) {
    return token;
  }
  return false;
}

/**
 * remove token from the local storage
 * @param {void}
 * @returns {void}
 */
export function removeToken() {
  storage.removeItem('token');
}
