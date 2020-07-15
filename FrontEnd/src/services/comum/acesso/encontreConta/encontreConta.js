import React, { useState} from "react";
import api from "../../../util/api";

function EncontreConta() {
  const [cpf, setCpf]= useState("");
  const [email, setEmail] =useState ("");

  async function handleSubmit(event) {
    event.preventDefault();
   await api.post("/cadastro/encontreconta", {cpf,email});
  
  }
  return (
    <div>
      <br/>
      <form onSubmit={handleSubmit}>
        <div className="redefinirSenha">
        <h1>Encontre sua conta</h1>
        <br />
        <label>cpf: </label>
        <input type="text" name="cpf" id="cpf"  onChange={event => setCpf(event.target.value)} />
        <br />
        <label>E-mail: </label>
        <input type="email" name="email" id="email" onChange={event => setEmail(event.target.value)}/>
        <br />
        <button type="submit"className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}
export default EncontreConta;
