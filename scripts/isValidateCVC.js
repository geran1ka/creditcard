/*
4) Валидация CVV/CVC пропускает строку с тремя цифровыми символами,
не пропускает строки с 1-2 цифровыми символами и больше 4-х символами.

5) Валидация CVV/CVC не пропускает строки с  нецифровыми символами 
(латиница, кириллица и знаки препинания).
*/

const isValidateCVC = str => {
  if (!/^\d{3}$/.test(str)) {
    return false;
  }
  if (/[^\d]/.test(str)) {
    return false;
  }
  return true;
}

export default isValidateCVC;