import axios from 'axios';
import * as session from '../services/session';
import { unauthenticate } from '../actions/auth';
// Add a request interceptor
const configureAxios = (store) => {
  axios.interceptors.request.use(
    function(config) {
    // adding token to the authorization header only
      const token = session.getToken();
      if(token){
        config.headers = {
          authorization: `Bearer ${token}`
        };
      }
      return config;
    },
    function(error) {
    // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
    // Do something with response data
      return response;
    },
    function(error) {
      // Do something with response error
      if (parseInt(error.status, 10) === 401) {
        store.dispatch(unauthenticate());
      }
      //TODO:  handle 403 case too
      return Promise.reject(error);
    }
  );

};

export default configureAxios;