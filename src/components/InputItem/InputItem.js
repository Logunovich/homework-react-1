import React, { Component } from 'react';
import styles from './InputItem.module.css';

class InputItem extends Component {

  render() {
    let errorEmptyMessage = null;
    let errorValidateMessage = null;
    const {inputType, type, name, label, placeholder, validationText} = this.props.input;

    if (this.props.emptyValues.indexOf(name) >= 0) {
      errorEmptyMessage = 'Поле пустое. Заполните пожалуйста';
    };

    if (this.props.validateErrorValues.indexOf(name) >= 0) {
      errorValidateMessage = validationText;
    };

    const renderField = () => {
      const actualValue = this.props.values.filter(item => item.input === name)[0].value;
      const lengthText = 600 - actualValue.length;
      const maxText = lengthText >= 0 ? 'Максимальное количество символов: 600/' + lengthText : `Превышен лимит! (600/${lengthText})`;
      const classLimitText = lengthText >= 0 ? styles.maxText : styles.maxTextError;

      switch(inputType) {
        case 'input': 
          return (
            <>
              <label className={styles.label} htmlFor={name}>{label}:</label>
              <input 
                value={actualValue}
                className={styles.input} 
                type={type} 
                name={name} 
                placeholder={`${placeholder}...`}
                onChange={(e) => this.props.handler(e, name)}/>
              <div className={styles.isEmpty}>
                {errorEmptyMessage}{errorValidateMessage}
              </div>
            </>
          )
        case 'textArea': 
          return (
            <>
              <label className={styles.label} htmlFor={name}>{label}:</label>
              <textarea 
                value={actualValue}
                className={styles.input} 
                rows='7' name={name} 
                placeholder={`${placeholder}...`}
                onChange={(e) => this.props.handler(e, name)}
                />
              <div className={classLimitText}>
                {maxText}
              </div>
              <div className={styles.isEmpty}>
                {errorEmptyMessage}{errorValidateMessage}
              </div>
            </>
          )
        default: 
          return null
      }
    };

    return (
      <div className={styles.input__box}>
        {renderField()}
      </div>
    )
  }
};

export default InputItem;