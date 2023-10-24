/*
1) Валидация Card Holder пропускает Строку с двумя словами разделенными
пробелами и состоящие только из латинских букв

группа из  3 проверок: на одно слово, кириллицу и содержание
цифр (дополнительные тесты приветствуются)
*/

const isValidateName = str => {
  if (str.split(' ').length !== 2) {
    return false;
  }

  if (/\d/.test(str)) {
    return false;
  }

  const arr = str.split(' ').map((item) => /^[a-zA-Z]+$/.test(item));

  if (!arr.every(item => item === true)) {
    return false;
  }

  return true;
}

export default isValidateName;


