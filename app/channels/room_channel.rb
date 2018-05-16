class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel_#{params['room']}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    new_message = Message.new
    new_message.body, new_message.author_id, new_message.channel_id = data['body'], data['author_id'], params['room']
    new_message.save!

    c = Channel.includes(:members).find(new_message.channel_id)
    if c.is_dm
      c.members.each do |member|
        if member.username == 'slimbot'
          QuerySlimbotJob.perform_later new_message, member
        end
      end
    end
  end

end
