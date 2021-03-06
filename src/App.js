import React, { Component } from 'react';
import Header from './Header';
import Calculator from './Calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div class="container">
              <Calculator />
        </div>

      <footer class="footer">
        <p>2018 &copy; Tax Help <br /> <a target="_blank" href="https://www.dropbox.com/s/fy39x9d7t6as4hr/terms-of-use.docx">Правила использования</a> <br /> Есть вопрос? Пишите на <a href="mailto:dogovorpodryada.by@gmail.com">dogovorpodryada.by@gmail.com</a></p>
      </footer>
      </div>
    );
  }
}

export default App;
