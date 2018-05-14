import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureAxios from './api/axiosUtility';
import store from './store';
import App from './app';

configureAxios(store);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
