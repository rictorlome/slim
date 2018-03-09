export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export const selectChannel = (channelId) => {
  return {
    type: SELECT_CHANNEL,
    channelId
  }
}
