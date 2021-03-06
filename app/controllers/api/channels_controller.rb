class Api::ChannelsController < ApplicationController
  def index
    if params[:query].present?
      @channels = Channel.includes(:members).where('title ~ ?', params[:query]).where(is_dm: false)
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
    if @participation.destroy
      render json: {channel_id: @participation.channel_id, member_id: @participation.member_id }
    else
      render json: {errors: ['Cannot leave channel']}, status: 422
    end
  end

  def join_channel
    @participation = Participation.new(member_id: current_user.id, channel_id: params[:channel_id])
    if @participation.save
      render json: {channel_id: @participation.channel_id, member_id: @participation.member_id }
    else
      render json: {errors: @participation.errors.full_messages}, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :is_dm, member_ids: [])
  end
end
