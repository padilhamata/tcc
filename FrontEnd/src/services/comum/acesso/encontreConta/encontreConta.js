import React from "react";
import api from "../../../util/api";

function encontre() {
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/redefinirSenha/");
    console.log(response);
  }
  return (
    <div>
      <br/>
      <form onSubmit={handleSubmit}>
        <div className="redefinirSenha">
        <h1>Encontre sua conta</h1>
        <br />
        <label>cpf: </label>
        <input type="text" name="cpf" id="cpf" />
        <br />
        <label>E-mail: </label>
        <input type="email" name="email" id="email" />
        <br />
        <button type="button"className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}
export default encontre;
