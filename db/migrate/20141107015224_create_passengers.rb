class CreatePassengers < ActiveRecord::Migration
  def change
    create_table :passengers do |t|
      t.string :name
      t.text :password_digest

      t.timestamps
    end
  end
end
