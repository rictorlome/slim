class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where('channel_id = ?', params[:channel_id])
    render :index
  end

  def create
    debugger
    @message = current_user.messages.new(message_params)
    @message.channel_id = params[:channel_id]
    if @message.save
      render :show
    else
      render json: {errors: @channel.errors.full_messages}, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
