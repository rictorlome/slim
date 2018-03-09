export const joinChannel = (id) => {
  return $.ajax({
    url: `/api/channels/${id}/participations`,
    method: 'POST'
  })
}

export const leaveChannel = (id) => {
  return $.ajax({
    url: `/api/channels/${id}/participations`,
    method: 'DELETE'
  })
}

export const createChannel = (channel) => {
  return $.ajax({
    url: '/api/channels',
    method: 'POST',
    data: {channel}
  })
}
