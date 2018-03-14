@channels.each do |channel|

  members = channel.members

  json.set! channel.id do
    json.extract! channel, :id, :title, :created_at, :creator_id
    json.member_ids members.map { |member| member.id}
  end
end
