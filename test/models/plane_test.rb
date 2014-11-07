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

require 'test_helper'

class PlaneTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
