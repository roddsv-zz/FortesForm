class EstadosController < ApplicationController
  
  # GET /estados or /estados.json
  def index
    @estados = Estado.all
  end
end
