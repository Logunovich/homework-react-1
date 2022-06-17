import React from 'react';
import styles from './InputItem.module.css';

const InputItem = ({input, handler, value, errors}) => {
  let errorText = null;
  const {inputType, type, label, placeholder} = input[1];
  const name = input[0];
  const lengthText = 600 - value.length;
  const maxText = lengthText >= 0 ? 
      'Максимальное количество символов: 600/' + lengthText : 
      `Превышен лимит! (600/${lengthText})`;
  const classLimitText = lengthText >= 0 ? styles.maxText : styles.maxTextError;

  if (Object.keys(errors).includes(name)) {
    errorText = errors[name]
  }

  const renderField = () => { 
    switch(inputType) {
      case 'input': 
        return (
          <>
            <label className={styles.label} htmlFor={name}>{label}:</label>
            <input 
              value={value}
              className={styles.input} 
              type={type} 
              name={name} 
              placeholder={`${placeholder}...`}
              onChange={(e) => handler(e, name)}/>
            <div className={styles.isEmpty}>
              {errorText}
            </div> 
          </>
        )
      case 'textArea': 
        return (
          <>
            <label className={styles.label} htmlFor={name}>{label}:</label>
            <textarea 
              value={value}
              className={styles.input} 
              rows='7' name={name} 
              placeholder={`${placeholder}...`}
              onChange={(e) => handler(e, name)}
              />
            <div className={classLimitText}>
              {maxText}
            </div>
            <div className={styles.isEmpty}>
              {errorText}
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
};

export default InputItem;