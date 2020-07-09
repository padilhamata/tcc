import React, { useState } from "react";
import api from "../../../util/api";
import md5 from "md5";


function Inscrever() {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [avenida, setAvenida] = useState("");
  const [cep, setCep] = useState("");
  const [setor,setSetor]= useState("");
  const [cidade, setCidade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  async function handleSubmit(event) {
    event.preventDefault();
      md5(setSenha);
    const response = await api.post("/cadastro",{nome,sobreNome,cpf,telefone,avenida,cep,setor,cidade,email,senha});
    console.log(response);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="inscrever_form">
          <h1>Abra uma conta</h1>
          <br />

          <label>Nome: </label>
          <input type="text" id="nome" name="nome" onChange={event => setNome(event.target.value)}  value={nome} />
          <br />

          <label>Sobrenome: </label>
          <input type="text" id="sobrenome" name="sobrenome"  onChange={event => setSobreNome(event.target.value)} value={sobreNome}/>
          <br />

          <label>CPF: </label>
          <input type="text" id="cpf" name="cpf" value={cpf} onChange={event => setCpf(event.target.value)} />
          <br />

          <label>Telefone: </label>
          <input type="tel" id="telefone" name="telefone" value={telefone} onChange={event => setTelefone(event.target.value)} />
          <br />

          <label>Avenida: </label>
          <input type="text" id="avenida" name="avenida" value={avenida} onChange={event => setAvenida(event.target.value)} />
          <br />

          <label>cep: </label>
          <input type="text" id="cep" name="cep" value={cep} onChange={event => setCep(event.target.value)}/>
          <br />

          <label>Setor: </label>
          <input type="text" id="cidade" name="cidade" value={setor} onChange={event => setSetor(event.target.value)} />
          <br />

          <label>Cidade: </label>
          <input type="text" id="cidade" name="cidade" value={cidade} onChange={event => setCidade(event.target.value)}/>
          <br />

          <label>E-mail: </label>
          <input type="email" id="email" name="email" placeholder="exemplo@examplo.com" value={email} onChange={event => setEmail(event.target.value)}/>
          <br />

          <label>Senha: </label>
          <input type="password" id="senha" autoComplete="new-password" value={senha} onChange={event => setSenha(event.target.value)}/>
          {/* <input type="password" data-type="password" autocomplete="new-password" name="senha"  placeholder="" id="senha" ></input> */}
          <br />

          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}
export default Inscrever
