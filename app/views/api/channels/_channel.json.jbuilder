json.user do
  json.extract! member, :id, :username
end

json.channel do
  json.extract! channel, :id, :title, :creator_id, :is_dm
  json.member_ids channel.member_ids
end
