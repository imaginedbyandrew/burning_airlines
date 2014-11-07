# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  callsign    :string(255)
#  origin      :string(255)
#  destination :string(255)
#  plane_id    :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Flight < ActiveRecord::Base
	belongs_to :plane
	has_many :seats

	after_save :create_seats

	def create_seats
	  # CREATE ALL THE SEATS FOR THE FLIGHT
		# find out how many seats are on the plane
		plane = Plane.find self.plane_id
		total_seats = plane.rows * plane.column

		# loop through and create that many seats with the flight id and no passenger
		total_seats.times do |s|
			seat = Seat.new()
			seat.flight_id = self.id
			seat.name = s.to_s
			seat.save
		end 
	end

end
