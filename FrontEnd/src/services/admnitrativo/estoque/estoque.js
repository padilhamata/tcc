import React from "react";

function estoque() {
  return (
    <>
      <h1>Estoque</h1>
      <br />
      <h2>Cadastro</h2>
      <label>CÓD: </label>
      <input />
      <label> Material: </label>
      <input />
      <label> Quantidade: </label>
      <input type="number" />
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
      <h2>Materiais Cadastrados</h2>
      <br />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">CÓD</th>
            <th scope="col">Material</th>
            <th scope="col">Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Queijo</td>
            <td> <input type="number" value="10"/></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Farinha de trigo</td>
            <td><input type="number" value="3"/></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Ovo</td>
            <td><input type="number" value="50"/></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default estoque;
