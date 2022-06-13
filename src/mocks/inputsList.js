const inputsList = [
  {inputType: 'input', type: 'text', name: 'name', label: 'Имя', placeholder: 'Введите ваше имя', validationText: 'Имя должно начинаться с большой буквы!'},
  {inputType: 'input', type: 'text', name: 'surname', label: 'Фамилия', placeholder: 'Введите вашу фамилию', validationText: 'Фамилия должна начинаться с большой буквы!'},
  {inputType: 'input', type: 'date', name: 'birthday', label: 'Дата рождения', placeholder: 'Ваша дата рождения'},
  {inputType: 'input', type: 'text', name: 'phone', label: 'Телефон', placeholder: 'Введите номер вашего телефона', validationText: 'Формат телефона: X-XXXX-XX-XX'},
  {inputType: 'input', type: 'text', name: 'web', label: 'Сайт', placeholder: 'Название вашего сайта', validationText: 'Сайт должен начинаться с https://'},
  {inputType: 'textArea', name: 'about', label: 'О себе', placeholder: 'Кратко опишите себя'},
  {inputType: 'textArea', name: 'stack', label: 'Стек технологий', placeholder: 'Какими технологиями вы пользуетесь'},
  {inputType: 'textArea', name: 'project', label: 'Описание последнего проекта', placeholder: 'Ваш последний проект'}
];

export default inputsList;