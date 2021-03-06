channels = user.joined_channels.includes(:members)

json.user do
  json.extract! user, :id, :username
  json.image_url asset_path(user.image.url(:original))
  json.joined_channel_ids channels.map { |channel| channel.id }
end
json.channels do
  channels.each do |channel|
    members = channel.members
    json.set! channel.id do
      json.extract! channel, :id, :title, :is_dm, :created_at, :creator_id
      json.member_ids members.map{ |member| member.id }
    end
  end
end
