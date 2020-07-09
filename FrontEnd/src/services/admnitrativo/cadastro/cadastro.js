import React from "react";

function estoque() {
  return (
    <>
      <h1>Cadastro de pizzas</h1>
      <br />
      <h2>Cadastro</h2>
      <label> Nome: </label>
      <input />
      <label>Ingredientes: </label>
      <input/>
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
      <h2>Pizzas Cadastrados</h2>
      <br />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Pizzas</th>
            <th scope="col">Ingredientes</th>
            <th scope="col">Comandos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atum</td>
            <td> <label>Molho, mussarela, atum, tomate, azeitona, oregano</label></td>
            <td><input type="button" value="Editar" className="btn btn-danger"/> </td>
            <td><input type="button" value="Excluir" className="btn btn-primary"/> </td>
          </tr>
          <tr>
            <td>Bacon</td>
            <td><label>Molho, mussarela,bacon, tomate, azeitona, orégano</label></td>
            <td><input type="button" value="Editar" className="btn btn-danger"/> </td>
            <td><input type="button" value="Excluir" className="btn btn-primary"/> </td>
          </tr>
          <tr>
            <td>Baiana</td>
            <td><label>Molho, mussarela, presunto, calabresa, bacon, pimenta, cebola, orégano, azeitona</label></td>
            <td><input type="button" value="Editar" className="btn btn-danger"/> </td>
            <td><input type="button" value="Excluir" className="btn btn-primary"/> </td>
          </tr>
          <tr>
            <td>Calabresa</td>
            <td><label>Molho, mussarela, calabresa, cebola, orégano, azeitona</label></td>
            <td><input type="button" value="Editar" className="btn btn-danger"/> </td>
            <td><input type="button" value="Excluir" className="btn btn-primary"/> </td>
          </tr>
          <tr>
            <td>Frango</td>
            <td><label>Molho, mussarela, frango, orégano, azeitona</label></td>
            <td><input type="button" value="Editar" className="btn btn-danger"/> </td>
            <td><input type="button" value="Excluir" className="btn btn-primary"/> </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default estoque;
