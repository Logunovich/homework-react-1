import React, { Component } from 'react';
import './App.css';
import InputsList from './components/InputsList/InputsList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: [
        {isInput: true, type: 'text', name: 'name', label: 'Имя', placeholder: 'Введите ваше имя'},
        {isInput: true, type: 'text', name: 'surname', label: 'Фамилия', placeholder: 'Введите вашу фамилию'},
        {isInput: true, type: 'date', name: 'birthday', label: 'Дата рождения', placeholder: 'Ваша дата рождения'},
        {isInput: true, type: 'text', name: 'phone', label: 'Телефон', placeholder: 'Введите номер вашего телефона'},
        {isInput: true, type: 'text', name: 'web', label: 'Сайт', placeholder: 'Название вашего сайта'},
        {isInput: false, name: 'about', label: 'О себе', placeholder: 'Кратко опишите себя'},
        {isInput: false, name: 'stack', label: 'Стек технологий', placeholder: 'Какими технологиями вы пользуетесь'},
        {isInput: false, name: 'project', label: 'Описание последнего проекта', placeholder: 'Ваш последний проект'}
      ]
    }
  }


  render() {
    return (
      <div className="app">
        <h1>Создание анкеты</h1>
        <InputsList inputs={this.state.inputs}/>
      </div>
    );
  }
}

export default App;
