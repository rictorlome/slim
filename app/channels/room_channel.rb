class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    m = Message.new
    m.body, m.author_id, m.channel_id = data['body'], data['author_id'], data['channel_id']
    m.save!
  end
end
