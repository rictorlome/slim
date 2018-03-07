class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.boolean :is_dm, null: false, default: false
      t.integer :creator_id, null: false

      t.timestamps
    end
    add_index :channels, :title
    add_index :channels, :is_dm
    add_index :channels, :creator_id
  end
end
