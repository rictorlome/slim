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
