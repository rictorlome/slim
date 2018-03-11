class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :logged_in?

  def login(user)
    session[:session_token] = user.reset_session_token!
    cookies.signed[:user_id] = current_user.id
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in
    render json: {error: ["Must be logged in"]}, status: 401 unless logged_in?
  end

end
