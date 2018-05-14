import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import auth from './reducers/auth';
import goal from './reducers/goal';
const reducers = combineReducers({
  auth,
  goal
});

// We actually need to be able to change the store if it's Dev
// Environemnt, ignore next line.
// eslint-disable-next-line import/no-mutable-exports
let store = createStore(reducers, applyMiddleware(ReduxThunk));

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = composeWithDevTools({});
  store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));
}

export default store;
