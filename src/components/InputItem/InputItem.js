import React, { Component } from 'react';
import styles from './InputItem.module.css';

class InputItem extends Component {

  render() {
    const {isInput, type, name, label, placeholder} = this.props.input;

    const renderField = (isInput) => {
      if (isInput) {
        return (
          <>
            <label className={styles.label} htmlFor={name}>{label}:</label>
            <input className={styles.input} type={type} name={name} placeholder={`${placeholder}...`}/>
          </>
        )
      } else {
        return (
          <>
            <label className={styles.label} htmlFor={name}>{label}:</label>
            <textarea className={styles.input} rows='7' name={name} placeholder={`${placeholder}...`}/>
          </>
        )
      }
    };

    return (
      <div className={styles.input__box}>
        {renderField(isInput)}
      </div>
    )
  }
};

export default InputItem;