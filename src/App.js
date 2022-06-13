import React, { Component } from 'react';
import './App.css';
import InputsList from './components/InputsList/InputsList';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <h1>Создание анкеты</h1>
        <InputsList />
      </div>
    );
  }
}

export default App;
