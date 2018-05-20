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
  }
};
