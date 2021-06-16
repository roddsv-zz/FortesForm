class CreateEnderecos < ActiveRecord::Migration[6.1]
  def change
    create_table :enderecos do |t|
      t.string :logradouro
      t.string :endereco
      t.integer :numero
      t.string :cep

      t.timestamps
    end
  end
end
