import React from 'react';
import { Link } from 'react-router-dom';

function local (){
    return(<>
    <h1> Dados de Entrega</h1>
    <label>Usuario: João</label>
    <br/>
    <label>CÓD: 01</label>
    <br/>
    <label>Pedido: Pizza Atum</label>
    <br/>
    <h2>Endereço</h2>
    <label>Avenida: </label>
      <label> Alameda josé gerson de Morais Quadra 91 Lote 17</label>
      <br />
      <label>CEP:</label>
      <label>74350.700</label>
      <br />
      <label>Cidade: </label>
      <label>Goiânia</label>
      <br/>
      <br/>
      <h3>Orientações Gerais</h3>
      <p> Usar máscara, higienizar o dinheiro ou a máquina de cartão. Clique <Link to="/coronavirus"> aqui</Link> para saber mais. </p>





    </>);
}

export default local;