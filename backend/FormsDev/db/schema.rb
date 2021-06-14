# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_11_174801) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cidades", force: :cascade do |t|
    t.string "nome"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "estado_id", null: false
    t.index ["estado_id"], name: "index_cidades_on_estado_id"
  end

  create_table "empresas", force: :cascade do |t|
    t.string "nome"
    t.decimal "cnpj"
    t.date "data_de_criacao"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "enderecos", force: :cascade do |t|
    t.string "logradouro"
    t.string "endereco"
    t.decimal "numero"
    t.string "cep"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "empresa_id", null: false
    t.bigint "cidade_id", null: false
    t.index ["cidade_id"], name: "index_enderecos_on_cidade_id"
    t.index ["empresa_id"], name: "index_enderecos_on_empresa_id"
  end

  create_table "estados", force: :cascade do |t|
    t.string "nome"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "cidades", "estados"
  add_foreign_key "enderecos", "cidades"
  add_foreign_key "enderecos", "empresas"
end
