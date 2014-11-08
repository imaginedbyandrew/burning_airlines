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
		plane = Plane.find self.plane_id

		plane.rows.times do |r|
			col_letter = "a"
			plane.column.times do
				seat = Seat.new()
				seat.flight_id = self.id
				seat.name = "#{r}#{col_letter}"
				seat.save
				col_letter.succ!
			end 
		end 
		
	end

end
