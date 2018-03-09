import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { Root } from './components/root.jsx';
import { createGuest } from './actions/session_actions';


import * as SearchUtil from './util/search_api_util';
import { searchChannels } from './actions/search_actions.js'
import { joinChannel, leaveChannel, createChannel, createDM } from './actions/channel_actions.js'
// import { getNamesOfSelectedUsers } from './util/selectors'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
       session: { currentUser: window.currentUser.user.id },
       entities: {
          users: {[window.currentUser.user.id]: window.currentUser.user},
          channels: window.currentUser.channels}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //FOR TESTING PURPOSES....
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.createGuest = createGuest;
  // window.searchChannels = searchChannels;
  // window.joinChannel = joinChannel;
  // window.leaveChannel = leaveChannel;
  // window.createChannel = createChannel;
  // window.createDM = createDM;
  // window.getNamesOfSelectedUsers = getNamesOfSelectedUsers



  ReactDOM.render(<Root store={store}/>, root);
});
