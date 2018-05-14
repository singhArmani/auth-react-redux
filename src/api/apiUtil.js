import axios from 'axios';
import appConfig from '../config';
class APIUtil {
  constructor(root = appConfig.baseRoot) {
    this.root = root;
  }

  /**
   * Get request
   *
   * @param path
   * @returns {axios.promise}
   */
  get(path, config = {}) {
    return axios.get(`${this.root}/${path}`, config);
  }

  /**
   * Post request
   *
   * @param path
   * @param data
   * @param config
   * @returns {axios.Promise}
   */
  post(path, data, config = {}) {
    return axios.post(`${this.root}/${path}`, data, config);
  }
}

export default APIUtil;
