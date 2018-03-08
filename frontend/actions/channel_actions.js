export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';

export const receiveChannels = (channels) => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  }
}
