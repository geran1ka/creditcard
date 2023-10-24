import isValidateCVC from "./isValidateCVC.js";
import isValidateName from "./isValidateName.js";
import isValidateNumberCard from "./isValidateNumber.js";

describe('Проверка валидатора CVC-кода', () => {
  it('Проверка CVC-код корректный', () => {
    expect(isValidateCVC('506')).toBe(true);
  });

  it('Проверка CVC-код не корректный 2 цифры', () => {
    expect(isValidateCVC('50')).toBe(false);
  });

  it('Проверка CVC-код не корректный 4 цифры', () => {
    expect(isValidateCVC('5045')).toBe(false);
  });

  it('Проверка CVC-код не корректный, присуствует не допустимый символ', () => {
    expect(isValidateCVC('5В6')).toBe(false);
    expect(isValidateCVC('5D6')).toBe(false);
    expect(isValidateCVC('5!6')).toBe(false);
  });
})

describe('Проверка валидатора Имени', () => {
  it('Проверка Имя корректное', () => {
    expect(isValidateName('Roman Khoruzhy')).toBe(true);
  });

  it('Проверка Имя не корректное, одно слово', () => {
    expect(isValidateName('Roman')).toBe(false);
    expect(isValidateName('Роман')).toBe(false);
  });

  it('Проверка Имя не корректное, присутствуют цифры', () => {
    expect(isValidateName('Rom1an Khoruzhy')).toBe(false);
  });

  it('Проверка Имя не корректное, киррилица и латиница', () => {
    expect(isValidateName('Роман Khoruzhy')).toBe(false);
  });
})

describe('Проверка валидатора Номера карты', () => {
  it('Проверка Номера карты - корректное', () => {
    expect(isValidateNumberCard('1234567891234567')).toBe(true);
  });

  it('Проверка Номера карты - не корректно, номер карты меньша 16', () => {
    expect(isValidateNumberCard('123456789123456')).toBe(false);
  });

  it('Проверка Номера карты - не корректно, номер карты больше 16', () => {
    expect(isValidateNumberCard('12345678912345678')).toBe(false);
  });

  it('Проверка Номера карты - не корректно, присутствуют недопустимые символы', () => {
    expect(isValidateName('1234567!91234567')).toBe(false);
    expect(isValidateName('12ф3456791234567')).toBe(false);
    expect(isValidateName('12d3456791234567')).toBe(false);
  });

})
