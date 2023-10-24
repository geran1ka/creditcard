/*
2) Валидация Card Number не пропускает произвольную строку,
содержащую любые нецифровые символы.

группа из 3 проверок:  символы кириллицы, латиницы, знаки препинания

3) Валидация Card Number не пропускает строку с недостаточным
количеством цифр и со слишком большим количеством цифр (например, 18).
*/
const isValidateNumberCard = num => {
  console.log('num: ', num);
  console.log('num: ', num.length);

  
  const test = num.toString();

  if (!/^\d+$/.test(test)) {
    console.log('Не цифра');
    return false;
  }

  if (test.length < 16) {
    console.log('Длина меньше 16');
    return false;
  }

  if (test.length > 16) {
    console.log('Длина больше 16');
    return false;
  }
  return true;
}

export default isValidateNumberCard;