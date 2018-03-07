@channels.each do |channel|
  member_ids = channel.members.map {|m| m.id }
  json.set! channel.id do
    json.extract! channel, :id, :title
    json.member_ids member_ids
  end
end
