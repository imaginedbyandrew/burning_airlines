# == Schema Information
#
# Table name: seats
#
#  id           :integer          not null, primary key
#  flight_id    :integer
#  passenger_id :integer
#  name         :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#

class Seat < ActiveRecord::Base
	belongs_to :flight
	belongs_to :passenger
end
