members = @channel.members

json.extract! @channel, :id, :title, :is_dm, :creator_id
json.member_ids members.map{ |mem| mem.id }
