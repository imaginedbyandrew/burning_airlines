class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  before_action :current_passenger

  protect_from_forgery with: :exception

  helper_method :logged_in?

  def current_passenger
  	@current_passenger = Passenger.find_by(id: session[:passenger_id])
  	session[:passenger_id] = nil unless @current_passenger.present?
  	@current_passenger
  end 

  def logged_in?
  	current_passenger != nil
  end
end
