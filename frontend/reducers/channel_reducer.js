import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, RECEIVE_OTHER_USERS_DM,
  RECEIVE_DM, ADD_CHANNEL_TO_CURRENT_USER } from '../actions/channel_actions.js'
import { RECEIVE_PARTICIPATION, REMOVE_PARTICIPATION } from '../actions/user_actions.js'
import { merge } from 'lodash';

export const channelReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_CHANNELS:
      return merge({},oldState, action.channels);
    case RECEIVE_CHANNEL:
    case RECEIVE_DM:
    case RECEIVE_OTHER_USERS_DM:
      let newObj = {};
      newObj[action.channel.id] = action.channel;
      return merge({},oldState,newObj)
    case ADD_CHANNEL_TO_CURRENT_USER:
      let copy = merge({}, oldState)
      let channel = copy[action.participation.channel_id]
      channel.member_ids.push(action.participation.member_id)
      return copy;
    case RECEIVE_PARTICIPATION:
      copy = merge({}, oldState);
      copy[action.channel.id].member_ids.push(action.user.id);
      return copy;
    case REMOVE_PARTICIPATION:
      copy = merge({},oldState);
      let arr = copy[action.channel.id].member_ids;
      let index = arr.indexOf(action.user.id);
      if (index !== -1) arr.splice(index, 1);
      return copy;
    default:
      return oldState
  }
}
