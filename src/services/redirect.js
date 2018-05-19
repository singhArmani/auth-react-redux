// Using history api from react-router 4
// Need to install it via yarn add history https://github.com/ReactTraining/history
import history from '../history';
export function redirect(path = '/dashboard') {
  history.push(path);
}
