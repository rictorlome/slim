export const createMessage = (message, channel) => {
  return $.ajax({
    url: `/api/channels/${channel}/messages`,
    method: 'POST',
    data: { message: {body: message, channel_id: channel} }
  })
}

export const fetchMessages = (channelId) => {
  return $.ajax({
    url: `/api/channels/${channelId}/messages`,
    method: 'GET'
  })
}
