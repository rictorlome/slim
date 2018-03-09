@users.each do |user|
  channels = user.joined_channels
  json.set! user.id do
    json.extract! user, :id, :username
    json.joined_channel_ids channels.map { |channel| channel.id }
  end
end
