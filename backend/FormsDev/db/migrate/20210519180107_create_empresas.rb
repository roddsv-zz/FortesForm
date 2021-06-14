class CreateEmpresas < ActiveRecord::Migration[6.1]
  def change
    create_table :empresas do |t|
      t.string :nome
      t.numeric :cnpj
      t.date :data_de_criacao

      t.timestamps
    end
  end
end
