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
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <Calculator />
            </div>
          </div>
        </div>

      <footer class="footer">
        <p>2018 &copy; Tax Help <br /> <a target="_blank" href="https://www.dropbox.com/s/fy39x9d7t6as4hr/terms-of-use.docx">Правила использования</a> <br /> Контакты: <a href="mailto:alexei.alex-ogly@yandex.ru">alexei.alex-ogly@yandex.ru</a></p>
      </footer>
      </div>
    );
  }
}

export default App;
