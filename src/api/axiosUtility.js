import * as storage from "../services/storage";

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // adding token to the authorization header only
    if (config.url.includes("http://localhost:8000/api/login")) {
      return config;
    }
    config.headers = {
      authorization: `Bearer ${LocalStorage.getToken()}`
    };
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
    return Promise.reject(error);
  }
);
