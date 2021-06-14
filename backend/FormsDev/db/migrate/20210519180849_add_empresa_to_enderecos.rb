class AddEmpresaToEnderecos < ActiveRecord::Migration[6.1]
  def change
    add_reference :enderecos, :empresa, null: false, foreign_key: true
  end
end
