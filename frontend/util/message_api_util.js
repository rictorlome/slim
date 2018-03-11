export const CreateMessage = (message, channel) => {
  return $.ajax({
    url: `/api/channels/${channel.id}/messages`,
    method: 'POST',
    data: { message }
  })
}
