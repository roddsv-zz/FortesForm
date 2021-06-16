class CidadesController < ApplicationController

  # GET /cidades or /cidades.json
  def index
    @cidades = Cidade.where(estado_id: params[:estado_id]).order(nome: :asc)
  end

end
