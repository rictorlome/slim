json.user do
  json.extract! member, :id, :username
  json.image_url asset_path(member.image.url(:original))
end

json.channel do
  json.extract! channel, :id, :title, :creator_id, :is_dm, :created_at
  json.member_ids channel.member_ids
end
