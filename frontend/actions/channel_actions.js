export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const ADD_CHANNEL_TO_CURRENT_USER = 'ADD_CHANNEL_TO_CURRENT_USER';
export const REMOVE_CHANNEL_FROM_CURRENT_USER = 'REMOVE_CHANNEL_FROM_CURRENT_USER';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

import * as ChannelApiUtil from '../util/channel_api_util.js';

export const receiveChannels = (channels) => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  }
}

export const receiveChannel = (channel) => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  }
}

export const addChannelToCurrentUser = (participation) => {
  return {
    type: ADD_CHANNEL_TO_CURRENT_USER,
    participation
  }
}
export const removeChannelFromCurrentUser = (participation) => {
  return {
    type: REMOVE_CHANNEL_FROM_CURRENT_USER,
    participation
  }
}

export const joinChannel = (id) => (dispatch) => {
  return ChannelApiUtil.joinChannel(id).then(
    (participation) => {
      return dispatch(addChannelToCurrentUser(participation))
    }
  )
}

export const leaveChannel = (id) => (dispatch) => {
  return ChannelApiUtil.leaveChannel(id).then(
    (participation) => dispatch(removeChannelFromCurrentUser(participation))
  )
}

export const createChannel = (channel) => (dispatch) => {
  return ChannelApiUtil.createChannel(channel).then(
    (channel) => dispatch(receiveChannel(channel))
  )
}
