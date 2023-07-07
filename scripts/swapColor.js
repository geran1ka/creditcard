export const swapColor = (lightcolor, darkcolor, color) => {
  lightcolor.forEach(input => {
    input.className.baseVal = 'lightcolor ' + color

  });
  darkcolor.forEach(input => {
    input.className.baseVal = 'darkcolor ' + color + 'dark';
  });
};