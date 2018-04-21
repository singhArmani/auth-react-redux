/**
 * Retreiving Token from Localstrogae
 *
 * @returns {object}  token
 */
export function getToken() {
  return localStorage.getItem("token");
}

/**
 * Saving Token from Localstrogae
 *
 * @param {string} token
 * @returns {void}
 */
export function saveToken(token) {
  localStorage.setItem("token", token);
}

/**
 * Remove key/value from local storage
 *
 * @param {string} key
 */
export function remove(key) {
  localStorage.removeItem(key);
}
