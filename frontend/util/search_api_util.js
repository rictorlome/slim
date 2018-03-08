export const searchUsers = (queryVal) => {
  return $.ajax({
    url: '/api/users',
    method: 'GET',
    data: {query: queryVal}
  })
}

export const searchChannels = (queryVal) => {
  return $.ajax({
    url: '/api/channels',
    method: 'GET',
    data: {query: queryVal}
  })
}
