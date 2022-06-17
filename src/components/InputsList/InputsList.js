import React, { Component } from 'react';
import InputItem from '../InputItem/InputItem';
import styles from './InputsList.module.css';
import Form from '../Form/Form';
import inputsList from '../../mocks/inputsList';

import { validatePhone, checkEmptyValues, checkValidate } from '../../util/validations';

class InputsList extends Component {
  constructor(props) {
    super(props);

    const [name, surname, birthday, phone, web, about, stack, project] = Object.keys(inputsList); 

    this.state = {
      inputValues: {
        [name]: '',
        [surname]: '',
        [birthday]: '',
        [phone]: '',
        [web]: '',
        [about]: '',
        [stack]: '',
        [project]: ''
      },
      errorInputs: {},
      isFormDone: false,
    }
    this.cleanValues = this.state.inputValues;
    this.maxLengthText = 600;
  }

  onChangeItemValue = (event, inputName) => {
    if (inputName === 'phone') {
      this.setState(({inputValues}) => {
        return {
          inputValues: {...inputValues, phone: validatePhone(event.target.value)}
        }
      })
    } else {
      this.setState(({inputValues}) => {
        return {
          inputValues: {...inputValues, [inputName]: event.target.value}
        }
      })
    }
  };

  cleanForm = () => {
    this.setState({inputValues: this.cleanValues})
  }

  submitForm = () => {
    let newEmptyValues = {};
    let isError = false;
    const {name, surname, phone, web, about, stack, project} = this.state.inputValues;

    checkEmptyValues(this.state.inputValues).forEach((item) => {
      isError = true;
      newEmptyValues = {...newEmptyValues, [item]: 'Поле обязательно для заполнения!'}
    })

    checkValidate(name.trim(), surname.trim(), phone, web.trim()).forEach((item) => {
      isError = true;
      newEmptyValues = {...newEmptyValues, [item]: inputsList[item].validationText}
    })

    this.setState({errorInputs: newEmptyValues})

    const checkLengthText = about.length <= this.maxLengthText 
                         && stack.length <= this.maxLengthText 
                         && project.length <= this.maxLengthText;

    if (!isError && checkLengthText) {
      this.setState({isFormDone: true})
    } 
  };

  closeFunction = () => {
    this.cleanForm();

    this.setState({
      isFormDone: false
    })
  }
  
  render() {

    return (
      <>
        {Object.entries(inputsList).map((input, id) => {
          return (
            <InputItem 
              input={input} 
              key={id}
              handler={this.onChangeItemValue}
              value={this.state.inputValues[input[0]]}
              errors={this.state.errorInputs}/>
          )
        })}
        <button 
          className={`${styles.button} ${styles.save_btn}`}
          onClick={this.submitForm}>
          Сохранить
        </button>
        <button 
          className={styles.button}
          onClick={this.cleanForm}>
          Отмена
        </button>
        {this.state.isFormDone ? <Form data={this.state.inputValues} closeFunction={this.closeFunction}/> : null}
      </>
    )
  }
};

export default InputsList;