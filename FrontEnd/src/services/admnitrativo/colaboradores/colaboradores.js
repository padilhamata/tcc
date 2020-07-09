import React from "react";

function colaboradores() {
  return (
    <>
      <h1>Colaboradores</h1>
      <br />
      <h2>Cadastro</h2>
      <label>CÓD: </label>
      <input />
      <label>Nome: </label>
      <input />
      <label>Cargo:</label>
      <input  />
      <br />
      <br />
      <input
        type="button"
        className="btn btn-primary"
        to="/pagamento"
        value="Cadastrar"
      />
      <br />
      <br />
      <h2>Colaboradores Cadastrados</h2>
      <br />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">CÓD</th>
            <th scope="col">Nome</th>
            <th scope="col">Cargo </th>
            <th scope="col">Excluir </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Lucas</td>
            <td> <label>Desenvolvedor</label></td>
            <td><input type="button" value="Excluir" className="btn btn-primary"/> </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Yara</td>
            <td> <label>Atendente</label></td>
            <td><input type="button" value="Excluir" className="btn btn-primary"/> </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>João</td>
            <td> <label>Motoqueiro</label></td>
            <td><input type="button" value="Excluir" className="btn btn-primary"/> </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default colaboradores;
