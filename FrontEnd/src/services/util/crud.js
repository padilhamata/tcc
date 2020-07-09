import React, { useState } from "react";
import api from "./api";

function Crud() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
  const [users, setUser] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    let response;
    console.log(nome, quantidade, valor);
    if (id === 0) {
      response = await api.post("/crud", { nome, quantidade, valor });
    } else {
      response = await api.put("/crud", {
        id,
        nome,
        quantidade,
        valor
      });
    }
    console.log(id, nome, quantidade, valor);
    console.log(response);
  }

  async function handleAtualiza() {
    const response = await api.get("/crud");
    setUser(response.data);
    console.log(response);
  }

  function handleEditar(id, nome, quantidade, valor) {
    setId(id);
    setNome(nome);
    setQuantidade(quantidade);
    setValor(valor);
  }

  async function handleExcluir(id) {
    const responsedelete = await api.delete("/crud/" + id);
    const get = await api.get("/crud");
    setUser(get.data);
    console.log(responsedelete);
    console.log(get);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1> Crud Básico </h1>
        <h2>Create</h2>
        <label>Nome: </label>
        <label>{id}</label>
        <input
          type="text"
          name="nome"
          id="nome"
          onChange={event => setNome(event.target.value)}
          value={nome}
        />
        <br />
        Quantidade
        <input
          type="text"
          name="quantidade"
          id="quantidade"
          onChange={event => setQuantidade(event.target.value)}
          value={quantidade}
        />
        <br />
        Valor
        <input
          type="text"
          name="valor"
          id="valor"
          onChange={event => setValor(event.target.value)}
          value={valor}
        />
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h2>Atualizar/Editar</h2>
        <button type="button" onClick={handleAtualiza}>
          Atualizar
        </button>
        {users.map(user => (
          <div key={user.id}>
            <p>
              {user.id} Nome= {user.nome}, Quantidade= {user.quantidade}, Valor=
              {user.valor}
            </p>
            <button
              type="button"
              onClick={handleEditar.bind(
                "",
                user.id,
                user.nome,
                user.quantidade,
                user.valor
              )}
            >
              Editar
            </button>
            <button type="button" onClick={handleExcluir.bind("", user.id)}>
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crud;
