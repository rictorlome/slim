json.user do
  json.extract! member, :id, :username
end

json.channel do
  json.extract! channel, :id, :title, :creator_id, :is_dm
end
