import { RECEIVE_USERS } from '../actions/user_actions.js'
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../actions/channel_actions.js'
import { SELECT_USER, UNSELECT_USER } from '../actions/select_actions';

import { CLEAR_SEARCH } from '../actions/search_actions';

export const searchReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USERS:
      return Object.keys(action.users);
    case RECEIVE_CHANNELS:
      return Object.keys(action.channels);
    case CLEAR_SEARCH:
    case RECEIVE_CHANNEL:
      return [];
    case SELECT_USER:
      const copy = oldState.slice()
      const index = copy.indexOf(String(action.userId))
      if (index !== -1) copy.splice(index, 1);
      return copy;
    case UNSELECT_USER:
      return oldState.concat(String(action.userId));
    default:
      return oldState;
  }
}
