class ParticipationBroadcastJob < ApplicationJob
  queue_as :default

  def perform(participation)
    ActionCable.server.broadcast "room_channel_#{participation.channel_id}", participation: render_participation(participation)
  end

  private

  def render_participation(participation)
    ApplicationController.renderer.render(partial: 'api/participations/participation', locals: {participation: participation})
  end
end
