class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :callsign
      t.string :origin
      t.string :destination
      t.integer :plane_id

      t.timestamps
    end
  end
end
