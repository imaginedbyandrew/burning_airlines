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
end
