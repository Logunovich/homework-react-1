import React, { Component } from 'react';
import InputItem from '../InputItem/InputItem';
import styles from './InputsList.module.css';

class InputsList extends Component {
  
  render() {
    const renderInputs = this.props.inputs.map((input, id) => {
      return (
        <InputItem input={input} key={id}/>
      )
    });
    
    return (
      <>
        {renderInputs}
        <button className={styles.button}>Сохранить</button>
        <button className={styles.button}>Отмена</button>
      </>
    )
  }
};

export default InputsList;