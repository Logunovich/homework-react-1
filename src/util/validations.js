export const validatePhone = (val) => {
  const cleanVal = val
    .replace(/\D/g, '')
    .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
  
  const finalVal = cleanVal
    .slice(1, 5)
    .filter((item) => item !== '')
    .join('-');

  return finalVal;
}

export const checkEmptyValues = (values) => {
  const arrayOfValues = Object.entries(values);
  const emptyValues = [];

  arrayOfValues.forEach((item) => {
    if (!item[1].trim().length) {
      emptyValues.push(item[0])
    }
  });

  return emptyValues;
};

export const checkValidate = (name, surname, phone, web) => {
  let newValidateErrors = [];
  
  if (name && name[0] !== name[0].toUpperCase()) {
    newValidateErrors.push('name')
  }

  if (surname && surname[0] !== surname[0].toUpperCase()) {
    newValidateErrors.push('surname')
  }

  if (phone.length && phone.length < 12) {
    newValidateErrors.push('phone')
  }

  if (web && web.slice(0,8) !== 'https://') {
    newValidateErrors.push('web')
  }

  return newValidateErrors;
};