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

require 'test_helper'

class SeatTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
