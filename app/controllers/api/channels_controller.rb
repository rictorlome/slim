class Api::ChannelsController < ApplicationController
  def index
    if params[:query].present?
      @channels = Channel.where('title ~ ?', params[:query]).where(is_dm: false)
    else
      @channels = Channel.none
    end

    render :index

  end

  def create
    @channel = current_user.created_channels.new(channel_params)
    if @channel.save
      render :show
    else
      render json: {errors: @channel.errors.full_messages}, status: 422
    end
  end

  def leave_channel
    @participation = Participation.find_by(member_id: current_user.id, channel_id: params[:channel_id])
  end

  def join_channel
    @participation = Participation.new(member_id: current_user.id, channel_id: params[:channel_id])
  end

  private

  def channel_params
    params.require(:channel).permit(:title)
  end
end
