import React, { useState } from "react";
import axios from "../../services/axios";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

export default function Form() {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [dataDeCriacao, setDataDeCriacao] = useState("");
  const [numero, setNumero] = useState("");

  async function createEmpresa() {
    const response = await axios.post("/empresas", {
      nome,
      cnpj,
      data_de_criacao: dataDeCriacao,
      endereco: {
        numero
      },
    });
    const { data } = response;

    return data;

    console.log(data);
  }

  React.useEffect(() => {
    async function getEstado() {
      const response = await axios.get("/estados");
      const { data } = response;

      console.log(data);
    }

    getEstado();
  });

  console.log(this);

  return (
    <form className="row" novalidate>
      <section>
        <h4>Dados da Empresa</h4>
        <div className="row g-1">
          <div className="col-md-1" />
          <div className="col-md-5">
            <label for="validationCustom01" className="form-label">
              Nome da Empresa
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Empresa"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row g-1">
          <div className="col-md-1" />
          <div className="col-md-3">
            <label for="validationCustom02" className="form-label">
              CNPJ
            </label>
            <InputMask
              type="text"
              className="form-control"
              id="validationCustom02"
              mask="99.999.999/9999-99"
              placeholder="99.999.999/9999-99"
              required
            />
          </div>
        </div>
        <div className="row g-1">
          <div className="col-md-1" />
          <div className="col-md-2">
            <label for="validationCustom02" className="form-label">
              Data de Criação
            </label>
            <input
              type="date"
              className="form-control"
              id="validationCustom02"
              placeholder="Data de Criação"
              required
            />
          </div>
        </div>
      </section>
      <section>
        <div className="row g-1">
          <h4>Detalhes de Endereço</h4>
          <div className="col-md-1" />
          <div className="col-md-1">
            <label for="validationCustom04" className="form-label">
              Logradouro
            </label>
            <select className="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>Rua</option>
              <option>Avenida</option>
              <option>Alameda</option>
              <option>Travessa</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Endereço
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Endereço"
              required
              // value={endereco}
              // onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <label for="validationCustom05" className="form-label">
              Número
            </label>
            <input type="text" className="form-control" placeholder="Número" value={numero}
              onChange={e => setNumero(e.target.value)}/>
          </div>
          <div className="col-md-1">
            <label for="validationCustom02" className="form-label">
              CEP
            </label>
            <InputMask
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="99999-999"
              mask="99999-999"
              required
            />
          </div>
          <div className="col-md-1" />
          <div className="row g-1">
            <div className="col-md-1" />
          </div>
        </div>
      </section>
      <div className="col-md-1" />

      <div className="col-md-2">
        <label for="validationCustom03" className="form-label">
          Estado
        </label>
        <select className="form-select" id="validationCustom04" required>
          <option selected disabled value="">
            {}
          </option>
          <option>`${}`</option>
        </select>
        <div className="col-md-12">
          <label for="validationCustom04" className="form-label">
            City
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={createEmpresa}
        >
          Cadastrar
        </button>
        <button className="btn btn-link">
          <Link to="/empresas">Listar empresas</Link>
        </button>
      </div>
    </form>
  );
}
