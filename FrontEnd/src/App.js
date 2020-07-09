import React, { Component } from "react";
import Crud from "./services/crud";
import "./App.css";
import Login from "./services/login/login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Crud />
      </div>
    );
  }
}

export default App;
