import React from "react";
import { Link } from "react-router-dom";
const Cabecalho = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        
          <div className="navbar-header">
            <Link className="navbar-brand nav-link" to="/cardapio">ADMINISTRAPIZZA</Link>
          </div>
          <Link className="nav-link active" to="/cardapio">
            Entrar
        </Link>
          <Link className="nav-link" to="/crud"/>

          <Link className="nav-link" to="/pedidos"/>
       
      </nav>
    </header>
  );
};

export default Cabecalho;
