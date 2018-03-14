json.message do
  json.id message.id
  json.body message.body
  json.channel_id message.channel_id
  json.author_id message.author_id
  json.created_at message.created_at
end
author = message.author
json.user do
  json.id author.id
  json.username author.username
  json.image_url asset_path(user.image.url(:original))
end
