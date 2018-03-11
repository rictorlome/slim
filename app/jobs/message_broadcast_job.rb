class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    # Do something later
    ActionCable.server.broadcast "room_channel_#{message.channel_id}", message: render_message(message)
  end

  private

  def render_message(message)
    ApplicationController.renderer.render(partial: 'api/messages/message', locals: {message: message})
  end
end
