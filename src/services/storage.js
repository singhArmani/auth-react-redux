/**
 * Retreiving Token from Localstrogae
 *
 * @param {string} key
 * @returns {object}  token
 */
export function getItem(key) {
  return localStorage.getItem(key);
}

/**
 * Saving Token to localstrogae
 *
 * @param {any} token
 * @returns {void}
 */
export function setItem(key, item) {
  localStorage.setItem(key, item);
}

/**
 * Remove key/value from local storage
 *
 * @param {string} key
 */
export function removeItem(key) {
  localStorage.removeItem(key);
}
