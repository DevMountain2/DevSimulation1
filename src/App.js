import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Nav from './components/Nav.js';
import router from './components/router.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className = "routerContainer">
              { router }
        </div>

      </div>
    );
  }
}
export default App;
