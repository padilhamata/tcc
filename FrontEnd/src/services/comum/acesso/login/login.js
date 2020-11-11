import React, { useState } from "react";
import api from "../../../util/api";
import { Link } from "react-router-dom";
import md5 from "md5";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSenha(md5(senha));
    let response = await api.post("/inscrever/logon", { email, senha });
    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container" style={{ width: '30%' }}>
        <div className="form-group" >
          <br/>
          <h1>Entrar</h1>
          <br />
          <label htmlFor="exampleInputEmail1">Endereço de email</label>
          <input
            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" required="required" onChange={event => setEmail(event.target.value)} value={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            Nunca vamos compartilhar seu email, com ninguém.
          </small>
        </div>
        <br />
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Senha</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" onChange={event => setSenha(event.target.value)} value={senha}/>
        </div>
        <div className="form-group form-check">
          <div className="enviar">
            <button type="submit" className="btn btn-primary form-group form-check-button">
              Enviar
        </button>
          </div>
          <div className="checkbox">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          </div>
          <div>
            <label className="form-check-label" htmlFor="exampleCheck1">
              Salvar a senha
          </label>
          </div>
        </div>
        <br />
        <Link to="/encontreconta">Esqueceu a senha?</Link>
        <br />
        <Link to="/inscrever">Inscrever</Link>
      </div>
    </form>
  );
}
export default Login;
