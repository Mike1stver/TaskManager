import React, { Component } from "react";
import { render } from "react-dom";
import Formulario from "./components/formulario.js";
import Clock from "./components/clock.js";
import Horario from "./components/horario.js";
import Header from "./components/Header.js";
// import App from './components/App.js'

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Horario />
      </React.Fragment>
    );
  }
}
// const persona1 ={
//     nombre: 'Miguel',
//     apellido: 'Fabian',
//     edad: '27',
//     nacionalidad:'peruana'
// }
// render(<App {...persona1}/>, document.getElementById('root'))

render(<Main />, document.getElementById("root"));
