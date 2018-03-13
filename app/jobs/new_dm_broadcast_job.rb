class NewDMBroadcastJob < ApplicationJob
  queue_as :default

  def perform(channel)
    # Do something later
    debugger
    channel.members.each do |member|
      ActionCable.server.broadcast "user_channel_#{member.id}", channel: render_channel(channel, member)
    end
  end

  private

  def render_channel(channel, member)
    ApplicationController.renderer.render(partial: 'api/channels/channel', locals: {channel: channel, member: member})
  end
end
