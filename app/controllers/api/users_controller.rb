class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def index
    if params[:query].present?
      @users = User.includes(:joined_channels).where('username != ?', current_user.username)
      .where('username ~ ?', params[:query])
    else
      @users = User.none
    end

    render :index
  end

  def update
    @user = User.find(params[:id])
    @user.image = params[:user][:image]
    if @user.save
      render :show
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end    
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
