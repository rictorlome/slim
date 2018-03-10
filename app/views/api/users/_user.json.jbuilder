channels = user.joined_channels

json.user do
  json.extract! user, :id, :username
  json.joined_channel_ids channels.map { |channel| channel.id }
end
json.channels do
  channels.each do |channel|
    members = channel.members
    json.set! channel.id do
      json.extract! channel, :id, :title, :is_dm
      json.member_ids members.map{ |member| member.id }
    end
  end
end
