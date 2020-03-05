import React, { Component } from 'react';
import Home from '../Home/Home'

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class Contents extends Component {
  render() {
    return (<div>
        <Home></Home>
    </div>)
  }
}

export default Contents;