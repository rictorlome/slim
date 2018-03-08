import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_USERS } from '../actions/user_actions.js';
import { ADD_CHANNEL_TO_CURRENT_USER, REMOVE_CHANNEL_FROM_CURRENT_USER } from '../actions/channel_actions';

import { merge } from 'lodash';

export const userReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({},oldState,{[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({},oldState,action.users);
    case ADD_CHANNEL_TO_CURRENT_USER:
      let copy = merge({},oldState)
      copy[action.participation.member_id].joined_channel_ids.push(action.participation.channel_id)
      return copy;
    case REMOVE_CHANNEL_FROM_CURRENT_USER:
      copy = merge({},oldState)
      const arr = copy[action.participation.member_id].joined_channel_ids
      const index = arr.indexOf(action.participation.channel_id)
      if (index !== 1) arr.splice(index, 1);
      return copy;
    default:
      return oldState;
  }
}
