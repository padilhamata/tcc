import React from "react";
import { Link } from "react-router-dom";

function pagamento() {
  return (
    <div>
      <h1>Confirme seu Endereço</h1>
      <label>Avenida: </label>
      <label> Alameda josé gerson de Morais Quadra 91 Lote 17</label>
      <br />
      <label>CEP:</label>
      <label>74350.700</label>
      <br />
      <label>Cidade: </label>
      <label>Goiânia</label>
      <br/>
      <Link to="/editarusuario">Clique para editar seu Endereço</Link>
      <br/>
      <br />
      <div className="pagamento">
      <h1>Pagamento</h1>
<label>Valor das compras: 100,00</label>
<br/>
<br/>
<h3>Qual a forma de Pagamento?</h3>  
<ul className="nav flex-column ">
  <li className="nav-item">
    <input type="radio" name="pagamento"/>
    <label> Dinheiro, Levar troco para: </label>
    <input type="number" />
    <br/>

  </li>

  <li className="nav-item" >
  <input type="radio" name="pagamento"/>
    <label >Cartão, Digite a bandeira do Cartão: </label>
    <select >
              <option>Escolha</option>
            </select>
    <br/>
    <br/>
  </li>
</ul>
</div>
<Link   className="btn btn-primary" to="/entrega" >Continuar</Link>

    </div>
  );
}
export default pagamento;
