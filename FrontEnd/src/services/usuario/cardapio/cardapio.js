import React from "react";
import { Link } from "react-router-dom";

function telaInicial() {
  return (
    <div className="cardapio">
      <h1>Cardápio</h1>
      <h2>Pizzas Recomendadas</h2>
      <div className="row">
        <div className="col-sm-4">
          <div className=" form-check-inline">
            <label className="pizza">ATUM: </label>
            <select className="form-control">
              <option>Escolha</option>
              <option>1 Pequena</option>
              <option>2 Pequena</option>
              <option>1 Media</option>
              <option>2 Media</option>
              <option>1 Grande</option>
              <option>2 Grande</option>
            </select>
          </div>

          <label className="d-block">
            Molho, mussarela, atum, tomate, cebola, azeitona, orégano
          </label>
        </div>
        <div className="col-sm-4">
          <div className=" form-check-inline">
            <label className="pizza">Napolitana:</label>
            <select className="form-control ">
              <option>Escolha</option>
              <option>1 Pequena</option>
              <option>2 Pequena</option>
              <option>1 Media</option>
              <option>2 Media</option>
              <option>1 Grande</option>
              <option>2 Grande</option>
            </select>
          </div>
          <label className="d-block ">
            Molho, mussarela, parmesão, tomate, azeitona, orégano
          </label>
        </div>
      
      <br />
      <div className="col-sm-4">
        <div className=" form-check-inline">
          <label className="pizza">Chocolate: </label>
          <select className="form-control">
            <option>Escolha</option>
            <option>1 Pequena</option>
            <option>2 Pequena</option>
            <option>1 Media</option>
            <option>2 Media</option>
            <option>1 Grande</option>
            <option>2 Grande</option>
          </select>
        </div>
        <label className="d-block">
          Creme de Leite, mussarela, Chocolate, cereja
        </label>
      </div>
      </div>
      <br />
      <div className="conteiner">
        <div className="row">
          <div className="col-sm-4">
            <h2>Cardapio de pizzas</h2>
            <div className=" form-check-inline">
              <label className="pizza">ATUM: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <p className="d-block text-center">
              Molho, mussarela, atum, tomate, cebola,azeitona, orégano
            </p>

            <br />

            <div className=" form-check-inline">
              <label className="pizza">Bacon: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block">
              Molho, mussarela, bacon, tomate, azeitona, orégano
            </label>
            <br />

            <div className=" form-check-inline ">
              <label className="pizza">Baiana: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block ">
              Molho, mussarela, presunto, calabresa, bacon, pimenta, cebola, orégano, azeitona
            </label>
            <br />
            <div className=" form-check-inline">
              <label className="pizza">Calabresa: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block">
              Molho, mussarela, calabresa, cebola, orégano, azeitona
            </label>
            <br />
            <div className=" form-check-inline">
              <label className="pizza">Frango:</label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block">
              Molho, mussarela, frango, azeitona, orégano
            </label>
            <br />

            <div className=" form-check-inline">
              <label className="pizza">Napolitana:</label>
              <select className="form-control ">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block ">
              Molho, mussarela, parmesão, tomate, azeitona, orégano
            </label>
            <br />

            <div className=" form-check-inline">
              <label className="pizza">Portuguesa: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block ">
              Molho, mussarela, palmito, catupiry, azeitona, orégano
            </label>
            <br />

            <div className=" form-check-inline">
              <label className="pizza">Quatro Queijo:</label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block">
              Molho, mussarela, provolone, queijo prato, caipira
            </label>
          </div>

          <div className="col-sm4">
            <h2>Pizzas Doces</h2>
            <div className=" form-check-inline">
              <label className="pizza">California: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
              <br />
            </div>
            <label className="d-block">
              Creme de
              Leite, mussarela, abacaxi, pêssego, banana, maçã, figo, caramelo, cereja
            </label>

            <div className=" form-check-inline">
              <label className="pizza">Banana: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block">
              Creme de leite, mussarela, banana, canela, cereja
            </label>
            <br />
            <div className=" form-check-inline">
              <label className="pizza">Chocolate: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block">
              Creme de Leite, mussarela, Chocolate, cereja
            </label>
            <br />
            <div className=" form-check-inline">
              <label className="pizza">Prestígio: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block">
              Creme de leite, mussarela, goiabada, cereja
            </label>
            <br />
            <div className=" form-check-inline">
              <label className="pizza">Romeu e julieta: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <label className="d-block">
              Creme de Leite, mussarela, goiabada, cereja
            </label>
            <br />
            <div className=" form-check-inline">
              <label className="pizza">Brigadeiro</label>

              <select className="form-control">
                <option>Escolha</option>
                <option>1 Pequena</option>
                <option>2 Pequena</option>
                <option>1 Media</option>
                <option>2 Media</option>
                <option>1 Grande</option>
                <option>2 Grande</option>
              </select>
            </div>
            <br />
            <label className="d-block">
              Creme de leite, mussarela, brigadeiro, chocolate granulado, cereja
            </label>
          </div>
          <div className="col-sm-4">
            <h2>Bebidas</h2>
            <div className=" form-check-inline">
              <label className="pizza">Refrigerante Lata: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 </option>
                <option>2 </option>
                <option>3</option>
              </select>
            </div>
            <br />
            <div className="form-check-inline">
              <label className="pizza">Refrigerante 600 ml:</label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 </option>
                <option>2 </option>
                <option>3</option>
              </select>
            </div>
            <br />
            <div className=" form-check-inline">
              <label className="pizza">Refrigerante 2lt:</label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 </option>
                <option>2 </option>
                <option>3</option>
              </select>
            </div>
            <br />
            <div className=" form-check-inline">
              <label className="pizza">Cerveja Lata: </label>
              <select className="form-control">
                <option>Escolha</option>
                <option>1 </option>
                <option>2 </option>
                <option>3</option>
              </select>
            </div>
            <br />
            <h2>Valores</h2>
            <br />
            <label className="pizza">Pequena R$15,00</label>
            <br />
            <label className="pizza">Média R$18,00</label>
            <br />
            <label className="pizza">Grande R$ 20,00</label>
            <br />
            <label className="pizza">Refrigerante Lata R$:2,00</label>
            <br />
            <label className="pizza">Refrigerante 600ml: R$3,00</label>
            <br />
            <label className="pizza">Refrigerante 2lt R$:5,00</label>
            <br />
            <label className="pizza">Cerveja Lata R$:2,50</label>
            <br />
           
            <Link   className="btn btn-primary" to="/pagamento" >Comprar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default telaInicial;
