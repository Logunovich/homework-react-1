import React from 'react';
import styles from './Form.module.css';

const Form = ({data, closeFunction}) => {
  const {name, surname, birthday, phone, web, about, stack, project} = data;
    
  return (
    <>
      <div className={styles.wrapperForm}>
        <div className={styles.form}>
          <h2>Ваша анкета</h2>
          <ul>
            <li><span className={styles.list}>Имя:</span> {name}</li>
            <li><span className={styles.list}>Фамилия:</span> {surname}</li>
            <li><span className={styles.list}>Дата рождения:</span> {birthday}</li>
            <li><span className={styles.list}>Номер телефона:</span> {phone}</li>
            <li><span className={styles.list}>Сайт:</span> {web}</li>
            <li><span className={styles.list}>О вас:</span> {about}</li>
            <li><span className={styles.list}>Стек технологий:</span> {stack}</li>
            <li><span className={styles.list}>Описание проекта:</span> {project}</li>
          </ul> 
        <div className={styles.closeBtn} onClick={closeFunction}>X</div>
        </div>
      </div> 
    </>
  )
}

export default Form;