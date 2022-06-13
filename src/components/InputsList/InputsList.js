import React, { Component } from 'react';
import InputItem from '../InputItem/InputItem';
import styles from './InputsList.module.css';
import Anketa from '../Anketa/Anketa';
import inputsList from '../../mocks/inputsList';

class InputsList extends Component {
  constructor(props) {
    super(props);

    const [name, surname, birthday, phone, web, about, stack, project] = inputsList; 

    this.state = {
      inputValues: [
        {input: name.name, value: ''},
        {input: surname.name, value: ''},
        {input: birthday.name, value: ''},
        {input: phone.name, value: ''},
        {input: web.name, value: ''},
        {input: about.name, value: ''},
        {input: stack.name, value: ''},
        {input: project.name, value: ''},
      ],
      emptyValues: [],
      validateErrorValues: [],
      isAnketaDone: false,
      anketaData: {
        name: '',
        surname: '',
        birthday: '',
        phone: '',
        web: '',
        about: '',
        stack: '',
        project: ''
      }
    }
  }

  cleanForm = () => {
    const [name, surname, birthday, phone, web, about, stack, project] = inputsList; 

    this.setState({
      inputValues: [
        {input: name.name, value: ''},
        {input: surname.name, value: ''},
        {input: birthday.name, value: ''},
        {input: phone.name, value: ''},
        {input: web.name, value: ''},
        {input: about.name, value: ''},
        {input: stack.name, value: ''},
        {input: project.name, value: ''},
      ],
    })
  };

  validatePhone = (val) => {
    if (val.length > 12) {
      return
    };

    let newPhoneVal = val.trim();

    if (val.length === 0) {
      this.setState(({inputValues}) => {
        return {
          inputValues: [...inputValues.slice(0, 3), {input: 'phone', value: ''}, ...inputValues.slice(4)]
        }
      })
    }

    if (newPhoneVal.length === 2 && newPhoneVal[newPhoneVal.length - 1] === '-') {
      newPhoneVal = newPhoneVal.slice(0,1)
    }

    if (newPhoneVal.length === 7 && newPhoneVal[newPhoneVal.length - 1] === '-') {
      newPhoneVal = newPhoneVal.slice(0,6)
    }

    if (newPhoneVal.length === 10 && newPhoneVal[newPhoneVal.length - 1] === '-') {
      newPhoneVal = newPhoneVal.slice(0,9)
    }

    if (Number.isInteger(+newPhoneVal[newPhoneVal.length-1])) {
      this.setState(({inputValues}) => {
        if (newPhoneVal.length === 2) {
          newPhoneVal = this.state.inputValues[3].value + '-' + newPhoneVal[newPhoneVal.length-1];
        }

        if (newPhoneVal.length === 7) {
          newPhoneVal = this.state.inputValues[3].value + '-' + newPhoneVal[newPhoneVal.length-1];
        }

        if (newPhoneVal.length === 10) {
          newPhoneVal = this.state.inputValues[3].value + '-' + newPhoneVal[newPhoneVal.length-1];
        }

        return {
          inputValues: [...inputValues.slice(0, 3), {input: 'phone', value: newPhoneVal}, ...inputValues.slice(4)]
        }
      });
    }    
  };
  
  onChangeItemValue = (event, inputName) => {
    const input = this.state.inputValues.filter(item => item.input === inputName)[0].input;
    
    if (input === 'phone') {
      this.validatePhone(event.target.value);
    } else {
      this.setState(({inputValues}) => {
        const index = inputValues.findIndex(item => item.input === input);
        return {
          inputValues: [...inputValues.slice(0, index), {input, value: event.target.value}, ...inputValues.slice(index + 1)]
        }
      })
    }
  };

  checkEmptyValues = () => {
    const arrayEmptyValues = [];

    this.state.inputValues.forEach((item) => {
      if (!item.value.trim()) {
        arrayEmptyValues.push(item.input)
      } 
    })
    return arrayEmptyValues;
  };

  checkValidate = () => {
    const {inputValues} = this.state;
    const arrayNotValidateValues = [];
    const firstSymbolName = inputValues[0].value.trim()[0];
    const firstSymbolSurName = inputValues[1].value.trim()[0];
    const phoneLength = inputValues[3].value.trim().length;
    const httpCheck = inputValues[4].value.trim().slice(0,8);
    
    if (inputValues[0].value.trim() && firstSymbolName !== firstSymbolName.toUpperCase()) {
      arrayNotValidateValues.push(inputValues[0].input)
    };

    if (inputValues[1].value.trim() && firstSymbolSurName !== firstSymbolSurName.toUpperCase()) {
      arrayNotValidateValues.push(inputValues[1].input)
    };

    if (phoneLength && phoneLength < 12) {
      arrayNotValidateValues.push(inputValues[3].input)
    }

    if (inputValues[4].value.trim() && httpCheck !== 'https://') {
      arrayNotValidateValues.push(inputValues[4].input)
    }

    return arrayNotValidateValues;
  };

  sendForm = () => {
    const {inputValues} = this.state;  

    const newForm = {
      name: inputValues.filter(item => item.input === 'name')[0].value.trim(), 
      surname: inputValues.filter(item => item.input === 'surname')[0].value.trim(), 
      birthday: inputValues.filter(item => item.input === 'birthday')[0].value.trim(), 
      phone: inputValues.filter(item => item.input === 'phone')[0].value.trim(), 
      web: inputValues.filter(item => item.input === 'web')[0].value.trim(), 
      about: inputValues.filter(item => item.input === 'about')[0].value.trim(), 
      stack: inputValues.filter(item => item.input === 'stack')[0].value.trim(), 
      project: inputValues.filter(item => item.input === 'project')[0].value.trim()
    }

    this.cleanForm();

    this.setState({
      anketaData: newForm,
      isAnketaDone: true
    })
  };

  submitForm = () => {
    this.setState({
      emptyValues: this.checkEmptyValues(),
      validateErrorValues: this.checkValidate()
    })
    
    const {inputValues} = this.state;
    const checkLengthText = inputValues[5].value.length <= 600 
                         && inputValues[6].value.length <= 600 
                         && inputValues[7].value.length <= 600;

    if (!this.checkEmptyValues().length && !this.checkValidate().length && checkLengthText) {
      this.sendForm();
    }
  };

  closeFunction = () => {
    this.setState({
      isAnketaDone: false
    })
  }
  
  render() {
    const {inputValues, emptyValues, validateErrorValues, anketaData, isAnketaDone} = this.state;
    const anketa = isAnketaDone ? <Anketa data={anketaData} closeFunction={this.closeFunction}/> : null;
    
    return (
      <>
        {inputsList.map((input, id) => {
          return (
            <InputItem 
              input={input} 
              key={id}
              values={inputValues}
              handler={this.onChangeItemValue}
              emptyValues={emptyValues}
              validateErrorValues={validateErrorValues}/>
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
        {anketa}
      </>
    )
  }
};

export default InputsList;