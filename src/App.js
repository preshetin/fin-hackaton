import React, { Component } from 'react';
import Header from './Header';
import Calculator from './Calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div class="container">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
