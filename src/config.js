export default {
  baseRoot: 'http://localhost:8000/api',
  defaultRoute: '/dashboard',
  routes: {
    HOME: '/',
    DASHBOARD: '/dashboard',
    CONTACT: '/contact',
    LOGIN: '/login',
    COLOR: '/color',
    PROPS: '/props'
  },
  NavbarItems: {
    private: {
      Home: '/',
      Dashboard: '/dashboard',
      Contact: '/contact'
    },
    public: {
      Props: '/props',
      Color: '/color',
      Login: '/login'
    }
  },
  okta: {
    config: {
      issuer: 'https://dev-252245.oktapreview.com/oauth2/default',
      redirect_uri: window.location.origin + '/implicit/callback',
      client_id: '0oaf33dka7KoyNzLX0h7'
    }
  }
};
