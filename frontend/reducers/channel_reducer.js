import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

import { merge } from 'lodash';

export const channelReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({},oldState, action.channels);
    default:
      return oldState
  }
}
