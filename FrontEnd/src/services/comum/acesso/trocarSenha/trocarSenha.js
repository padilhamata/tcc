import React, {useState} from "react";
import api from "../../../util/api";


function TrocaSenha() {
const [senha, setSenha] =useState("");
const [senhaNovamente, setSenhaNovamente]= useState("");



async function handleSubmit(event){
  event.preventDefault()
  await api.post("/cadastro/trocasenha", {senha,senhaNovamente})
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div >
        <h1>Redefinir Senha</h1>
        <br />
        
        <label>Digite a nova Senha: </label><br/>
        <input type="password" id="senha"  autocomplete="new-password" onChange= {event => setSenha(event.target.value)} /> 
        <br />
        <label>Digite novamente a senha: </label><br/>
        <input type="password" id="senhaNovamente"  autocomplete="new-password" onChange= {event => setSenhaNovamente(event.target.value)} /> 
        <br />
        <br/>
        <button type="button"className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}
export default TrocaSenha;
