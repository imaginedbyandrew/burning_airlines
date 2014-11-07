class SessionController < ApplicationController
  def new
  end

  def create
  	passenger = Passenger.find_by(name: params[:name])
  	if passenger.present? && passenger.authenticate(params[:password])
  		session[:passenger_id] = passenger.id 
  		redirect_to root_path
  	else
  		redirect_to login_path
  	end 
  end

  def destroy
  	session[:passenger_id] = nil
  	redirect_to root_path
  end
end
