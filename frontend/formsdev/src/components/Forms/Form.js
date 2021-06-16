import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

export default function Form() {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [dataDeCriacao, setDataDeCriacao] = useState("");
  const [numero, setNumero] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [cidadeId, setCidadeId] = useState([]);

  async function createEmpresa() {
    const response = await axios.post("/empresas", {
      nome: nome,
      cnpj: cnpj,
      data_de_criacao: dataDeCriacao,
      endereco: {
        logradouro: logradouro,
        endereco: endereco,
        numero: numero,
        cep: cep,
        cidade_id: cidadeId
      },
    });
    const { data } = response;

    return data;
  }

  async function setEstadoId(id) {
    axios.get("/cidades", {params: {estado_id: id}}).then((response) => {
      setCidades(response.data);
    });
  }

  React.useEffect(() => {
    axios.get("/estados").then((response) => {
      setEstados(response.data);
    });
  }, []);

  // React.useEffect(() => {
  //   axios.get("/cidades").then((response) => {
  //     setCidades(response.data);
  //   });
  // }, []);

  function handleInputChange(e) {}
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
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
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
              value={dataDeCriacao}
              onChange={(e) => setDataDeCriacao(e.target.value)}
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
            <select className="form-select" id="validationCustom04" required
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}>
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
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <label for="validationCustom05" className="form-label">
              Número
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
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
              value={cep}
              onChange={(e) => setCep(e.target.value)}
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
        <select className="form-select" id="validationCustom04" required
              onChange={(e) => setEstadoId(e.target.value)}>
          <option selected disabled value="">
            Escolha um estado
          </option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.id}>
              {estado.nome}
            </option>
          ))}
        </select>
        <div className="col-md-12">
          <label for="validationCustom04" className="form-label">
            Cidade
          </label>
          <select className="form-select" id="validationCustom04" required
            onChange={(e) => setCidadeId(e.target.value)}>>
            <option selected disabled value="">
              Escolha a cidade
            </option>
            {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.id}>
              {cidade.nome}
            </option>
          ))}
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
