import React from 'react';
import './App.css';
import InputsList from './components/InputsList/InputsList';

const App = () => {
  return (
    <div className="app">
      <h1>Создание анкеты</h1>
      <InputsList />
    </div>
  );
}

export default App;
