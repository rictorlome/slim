class Api::MessagesController < ApplicationController
  def index
    @messages = Message.includes(:author).where('channel_id = ?', params[:channel_id])
    render :index
  end
end
