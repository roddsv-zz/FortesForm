class CreateEstados < ActiveRecord::Migration[6.1]
  def change
    create_table :estados do |t|
      t.string :nome

      t.timestamps
    end
  end
end
