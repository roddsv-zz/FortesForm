class Empresa < ApplicationRecord
  has_one :endereco, autosave: true, dependent: :destroy

  def self.custom_new(attributes = {})
    attributes[:endereco] = Endereco.new(attributes[:endereco])
    new(attributes)
  end

  def custom_update(attributes = {})
    attributes[:endereco] = endereco.clone.assign_attributes(attributes[:endereco])
    update(attributes)
  end
end
