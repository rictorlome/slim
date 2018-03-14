import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_USERS, RECEIVE_PARTICIPATION, REMOVE_PARTICIPATION, RECEIVE_USER } from '../actions/user_actions.js';
import { ADD_CHANNEL_TO_CURRENT_USER, REMOVE_CHANNEL_FROM_CURRENT_USER,
  RECEIVE_DM, RECEIVE_OTHER_USERS_DM, RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions.js';

import { merge } from 'lodash';

export const userReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_MESSAGE:
    case RECEIVE_PARTICIPATION:
    case RECEIVE_USER:
      return merge({},oldState,{[action.user.id]: action.user});
    case RECEIVE_USERS:
    case RECEIVE_MESSAGES:
      return merge({},oldState,action.users);
    case ADD_CHANNEL_TO_CURRENT_USER:
      let copy = merge({},oldState)
      copy[action.participation.member_id].joined_channel_ids.push(action.participation.channel_id)
      return copy;
    case REMOVE_CHANNEL_FROM_CURRENT_USER:
      copy = merge({},oldState)
      let arr = copy[action.participation.member_id].joined_channel_ids
      let index = arr.indexOf(action.participation.channel_id)
      if (index !== -1) arr.splice(index, 1);
      return copy;
    case RECEIVE_CHANNEL:
      copy = merge({},oldState);
      copy[action.channel.creator_id].joined_channel_ids.push(action.channel.id)
      return copy;
    case RECEIVE_DM:
      copy = merge({},oldState);
      // copy[action.channel.creator_id].joined_channel_ids.push(action.channel.id)
      action.channel.member_ids.forEach( (id) => {
        copy[id].joined_channel_ids.push(action.channel.id)
      });
      return copy;
    case RECEIVE_OTHER_USERS_DM:
      copy = merge({},oldState);
      copy[action.user.id].joined_channel_ids.push(action.channel.id);
      return copy;
    default:
      return oldState;
  }
}
