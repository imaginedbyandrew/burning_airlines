# == Schema Information
#
# Table name: passengers
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  password_digest :text
#  created_at      :datetime
#  updated_at      :datetime
#

class Passenger < ActiveRecord::Base
	has_many :seats
end
