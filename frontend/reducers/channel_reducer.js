import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL,
  RECEIVE_DM, ADD_CHANNEL_TO_CURRENT_USER } from '../actions/channel_actions.js'

import { merge } from 'lodash';

export const channelReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_CHANNELS:
      return merge({},oldState, action.channels);
    case RECEIVE_CHANNEL:
    case RECEIVE_DM:
      let newObj = {};
      newObj[action.channel.id] = action.channel;
      return merge({},oldState,newObj)
    case ADD_CHANNEL_TO_CURRENT_USER:
        let copy = merge({}, oldState)
        let channel = copy[action.participation.channel_id]
        channel.member_ids.push(action.participation.member_id)
        return copy;
    default:
      return oldState
  }
}
