import APIUtil from "./apiUtil";

const api = new APIUtil();

const AuthApi = {
  signIn(username, password) {
    // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
    // This will set an `Authorization` header, overwriting any existing
    // `Authorization` custom headers you have set using `headers`.
    const config = {
      auth: {
        username,
        password
      }
    };

    return api.post("login", {}, config);
  }
};

export default AuthApi;
