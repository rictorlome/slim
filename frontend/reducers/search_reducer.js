import { RECEIVE_USERS } from '../actions/user_actions.js'
import { RECEIVE_CHANNELS } from '../actions/channel_actions.js'

import { CLEAR_SEARCH } from '../actions/search_actions';

export const searchReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USERS:
      return Object.keys(action.users);
    case RECEIVE_CHANNELS:
      return Object.keys(action.channels);
    case CLEAR_SEARCH:
      return [];
    default:
      return oldState;
  }
}
