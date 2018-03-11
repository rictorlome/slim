class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel_#{params['room']}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    m = Message.new
    m.body, m.author_id, m.channel_id = data['body'], self.connection.current_user.id, params['room']
    m.save!
  end
end
