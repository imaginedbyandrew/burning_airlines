# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  rows       :integer
#  column     :integer
#  created_at :datetime
#  updated_at :datetime
#

class Plane < ActiveRecord::Base
	has_many :flights
end
