import React, { Component } from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import MapsComponent from './components/MapsComponent';

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="title-App">
            <h2>Consulta de endereço</h2>
          </div>
          <div className="box-input">
            <h4>Consultar</h4>
            <InputComponent/>
          </div>
          <MapsComponent/>
          
        </div>
    );
  }
}

export default App;
