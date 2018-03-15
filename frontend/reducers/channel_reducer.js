import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, RECEIVE_OTHER_USERS_DM,
  RECEIVE_DM, ADD_CHANNEL_TO_CURRENT_USER, REMOVE_CHANNEL_FROM_CURRENT_USER } from '../actions/channel_actions.js'
import { RECEIVE_PARTICIPATION, REMOVE_PARTICIPATION } from '../actions/user_actions.js'
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';

export const channelReducer = (oldState={}, action) => {
  let copy;
  let channel;
  let newObj;
  let arr;
  let index;
  let channel_id;
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_CHANNELS:
      return merge({},oldState, action.channels);
    case RECEIVE_CHANNEL:
    case RECEIVE_DM:
    case RECEIVE_OTHER_USERS_DM:
      newObj = {};
      newObj[action.channel.id] = action.channel;
      return merge({},oldState,newObj)
    case ADD_CHANNEL_TO_CURRENT_USER:
      copy = merge({}, oldState)
      channel = copy[action.participation.channel_id]
      channel.member_ids.push(action.participation.member_id)
      return copy;
    case REMOVE_CHANNEL_FROM_CURRENT_USER:
      copy = merge({},oldState);
      channel = copy[action.participation.channel_id];
      arr = channel.member_ids;
      index = arr.indexOf(action.participation.member_id);
      if (index !== -1) arr.splice(index, 1);
      return copy;
    case RECEIVE_MESSAGES:
      copy = merge({},oldState);
      if (action.messages === undefined) return copy;
      channel_id = Object.values(action.messages)[0].channel_id;
      channel = copy[channel_id]
      channel.message_ids = Object.keys(action.messages).map( (id) => parseInt(id));
      return copy;
    case RECEIVE_MESSAGE:
      copy = merge({},oldState);
      channel = copy[action.message.channel_id];
      channel.message_ids === undefined ? channel.message_ids = [action.message.id] : channel.message_ids.push(action.message.id)
      return copy;
    case RECEIVE_PARTICIPATION:
      copy = merge({}, oldState);
      channel = copy[action.channel.id]
      channel.member_ids.push(action.user.id)
      return copy;
    case REMOVE_PARTICIPATION:
      copy = merge({},oldState);
      arr = copy[action.channel.id].member_ids;
      index = arr.indexOf(action.user.id);
      if (index !== -1) arr.splice(index, 1);
      return copy;
    default:
      return oldState
  }
}
