member = participation.member

json.user do
  json.id member.id
  json.username member.username
  json.image_url asset_path(member.image.url(:original))
  json.joined_channel_ids member.joined_channel_ids
end
json.channel do
  json.id participation.channel_id
end
