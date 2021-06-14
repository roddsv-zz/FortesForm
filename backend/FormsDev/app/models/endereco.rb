class Endereco < ApplicationRecord
    belongs_to :cidade
    belongs_to :empresa
end
