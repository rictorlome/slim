import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { Root } from './components/root.jsx';
// import { login } from './actions/session_action';
// import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //FOR TESTING PURPOSES....
  window.getState = store.getState;
  window.dispatch = store.dispatch;



  ReactDOM.render(<Root store={store}/>, root);
});
