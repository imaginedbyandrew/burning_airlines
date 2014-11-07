class CreateSeats < ActiveRecord::Migration
  def change
    create_table :seats do |t|
      t.integer :flight_id
      t.integer :passenger_id
      t.string :name

      t.timestamps
    end
  end
end
