export const searchUsers = (queryVal) => {
  return $.ajax({
    url: '/api/users',
    method: 'GET',
    data: {query: queryVal}
  })
}
