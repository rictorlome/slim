export const updateUserImage = (formData, id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    data: formData
  })
}
