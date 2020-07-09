import React from "react";


function trocaSenha() {

  return (
    <div>
      <form>
        <div >
        <h1>Redefinir Senha</h1>
        <br />
        <label>Digite a nova Senha: </label><br/>
        <input type="password" id="senha"  autocomplete="new-password" /> 
        <br />
        <label>Digite novamente a senha: </label><br/>
        <input type="password" id="senhaNovamente"  autocomplete="new-password" /> 
        <br />
        <br/>
        <button type="button"className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}
export default trocaSenha;
