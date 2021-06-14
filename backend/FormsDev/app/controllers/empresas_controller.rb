class EmpresasController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_empresa, only: %i[ show edit update destroy ]

  # GET /empresas or /empresas.json
  def index
    @empresas = Empresa.all
  end

  # GET /empresas/1 or /empresas/1.json
  def show
  end

  # GET /empresas/new
  def new
    @empresa = Empresa.new
  end

  # GET /empresas/1/edit
  def edit
  end

  # POST /empresas or /empresas.json
  def create
    @empresa = Empresa.custom_new(empresa_params)

    respond_to do |format|
      if @empresa.save
        byebug
        format.html { redirect_to @empresa, notice: "Empresa was successfully created." }
        format.json { render :show, status: :created, location: @empresa }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @empresa.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /empresas/1 or /empresas/1.json
  def update
    respond_to do |format|
      if @empresa.custom_update(empresa_params)
        format.html { redirect_to @empresa, notice: "Empresa was successfully updated." }
        format.json { render :show, status: :ok, location: @empresa }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @empresa.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /empresas/1 or /empresas/1.json
  def destroy
    @empresa.destroy
    respond_to do |format|
      format.html { redirect_to empresas_url, notice: "Empresa was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_empresa
      @empresa = Empresa.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def empresa_params
      params.require(:empresa).permit(:nome, :cnpj, :data_de_criacao).merge(
        endereco: params.require(:endereco).permit(:logradouro, :endereco, :numero, :cep, :cidade_id)
      )
    end
    # def endereco_params
    #   params.require(:endereco).permit(:logradouro, :endereco, :data_de_criacao).merge(endereco: Endereco.new(
    #     params.require(:endereco).permit(:logradouro, :endereco, :numero, :cep)
    #   ))
    # end

end


# t.string "logradouro"
#     t.string "endereco"
#     t.decimal "numero"
#     t.string "cep"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.bigint "empresa_id", null: false
#     t.bigint "cidade_id", null: false
