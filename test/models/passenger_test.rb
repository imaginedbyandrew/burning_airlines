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

require 'test_helper'

class PassengerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
