export default {
  baseRoot: 'http://localhost:8000/api',
  defaultRoute: '/dashboard',
  routes: {
    // Order is important here for Navbar to render menu items in right sequence
    HOME: '/',
    DASHBOARD: '/dashboard',
    CONTACT: '/contact',
    LOGIN: '/login',
    PROPS: '/props',
    COLOR: '/colors',
    SMARTCOLOR: '/color/:text/:color'
  }
};
