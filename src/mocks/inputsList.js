const inputsList = {
  name: {inputType: 'input', type: 'text', label: 'Имя', placeholder: 'Введите ваше имя', validationText: 'Имя должно начинаться с большой буквы!'},
  surname: {inputType: 'input', type: 'text', label: 'Фамилия', placeholder: 'Введите вашу фамилию', validationText: 'Фамилия должна начинаться с большой буквы!'},
  birthday: {inputType: 'input', type: 'date', label: 'Дата рождения', placeholder: 'Ваша дата рождения'},
  phone: {inputType: 'input', type: 'text', label: 'Телефон', placeholder: 'Введите номер вашего телефона', validationText: 'Формат телефона: X-XXXX-XX-XX'},
  web: {inputType: 'input', type: 'text', label: 'Сайт', placeholder: 'Название вашего сайта', validationText: 'Сайт должен начинаться с https://'},
  about: {inputType: 'textArea', label: 'О себе', placeholder: 'Кратко опишите себя'},
  stack: {inputType: 'textArea', label: 'Стек технологий', placeholder: 'Какими технологиями вы пользуетесь'},
  project: {inputType: 'textArea', label: 'Описание последнего проекта', placeholder: 'Ваш последний проект'}
}

export default inputsList;