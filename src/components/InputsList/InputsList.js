import React, { useState } from 'react';
import InputItem from '../InputItem/InputItem';
import styles from './InputsList.module.css';
import Form from '../Form/Form';
import inputsList from '../../mocks/inputsList';

import { validatePhone, checkEmptyValues, checkValidate } from '../../util/validations';

const InputsList = () => {
  const [name, surname, birthday, phone, web, about, stack, project] = Object.keys(inputsList); 
  const maxLengthText = 600;
  const initialValues = {
    [name]: '',
    [surname]: '',
    [birthday]: '',
    [phone]: '',
    [web]: '',
    [about]: '',
    [stack]: '',
    [project]: ''
  };
  const [inputValues, setInputValues] = useState(initialValues);
  const [errorInputs, setErrorInputs] = useState({});
  const [isFormDone, setIsFormDone] = useState(false);


  const onChangeItemValue = (event, inputName) => {
    if (inputName === 'phone') {
      setInputValues((inputValues) => {
        return {...inputValues, phone: validatePhone(event.target.value)}
      })
    } else {
      setInputValues((inputValues) => {
        return {...inputValues, [inputName]: event.target.value}
      })
    }
  };

  const cleanForm = () => {
    setInputValues(initialValues)
  }

  const submitForm = () => {
    let newEmptyValues = {};
    let isError = false;
    const {name, surname, phone, web, about, stack, project} = inputValues;

    checkEmptyValues(inputValues).forEach((item) => {
      isError = true;
      newEmptyValues = {...newEmptyValues, [item]: 'Поле обязательно для заполнения!'}
    })

    checkValidate(name.trim(), surname.trim(), phone, web.trim()).forEach((item) => {
      isError = true;
      newEmptyValues = {...newEmptyValues, [item]: inputsList[item].validationText}
    })

    setErrorInputs(newEmptyValues)

    const checkLengthText = about.length <= maxLengthText 
                         && stack.length <= maxLengthText 
                         && project.length <= maxLengthText;

    if (!isError && checkLengthText) {
      setIsFormDone(true)
    } 
  };

  const closeFunction = () => {
    cleanForm();

    setIsFormDone(false);
  }

  return (
    <>
      {Object.entries(inputsList).map((input, id) => {
        return (
          <InputItem 
            input={input} 
            key={id}
            handler={onChangeItemValue}
            value={inputValues[input[0]]}
            errors={errorInputs}/>
        )
      })}
      <button 
        className={`${styles.button} ${styles.save_btn}`}
        onClick={submitForm}>
        Сохранить
      </button>
      <button 
        className={styles.button}
        onClick={cleanForm}>
        Отмена
      </button>
      {isFormDone ? <Form data={inputValues} closeFunction={closeFunction}/> : null}
    </>
  )
}

export default InputsList;