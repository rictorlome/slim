class UserleaveBroadcastJob < ApplicationJob
  queue_as :default

  def perform(participation)
    # Do something later
    ActionCable.server.broadcast "room_channel_#{participation.channel_id}", userleave: render_participation(participation)
  end

  private

  def render_participation(participation)
    ApplicationController.renderer.render(partial: 'api/participations/participation', locals: {participation: participation})
  end
end
