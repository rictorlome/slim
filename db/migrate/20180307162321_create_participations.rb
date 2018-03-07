class CreateParticipations < ActiveRecord::Migration[5.1]
  def change
    create_table :participations do |t|
      t.integer :member_id, null: false
      t.integer :channel_id, null: false

      t.timestamps
    end
    add_index :participations, :member_id
    add_index :participations, [:channel_id, :member_id], unique: true
  end
end
