import { createPage } from "./scripts/createPage.js";
import IMask from "imask";
import { swapColor } from "./scripts/swapColor.js";
import { mask } from "./scripts/mask.js";

createPage();

const name = document.getElementById('name');
const cardnumber = document.getElementById('cardnumber');
const svgnumber = document.getElementById('svgnumber');
const expirationdate = document.getElementById('expirationdate');
const svgexpire = document.getElementById('svgexpire');
const securitycode = document.getElementById('securitycode');
const svgsecurity = document.getElementById('svgsecurity');
const ccicon = document.getElementById('ccicon');
const cclogo = document.getElementById('ccsingle');
const svgname = document.getElementById('svgname')
const svgnameback = document.getElementById('svgnameback')
const lightcolor = document.querySelectorAll('.lightcolor');
const darkcolor = document.querySelectorAll('.darkcolor');
const creditcard = document.querySelector('.creditcard');


creditcard.addEventListener('click', () => {
  creditcard.classList.toggle('flipped')
});

name.addEventListener('input', () => {
  name.value = name.value.replace(/[^a-zа-яё\s]/gi, '');
  svgname.textContent = name.value.toUpperCase();
  svgnameback.textContent = name.value;
})

securitycode.addEventListener('input', () => {
  securitycode.value = securitycode.value.replace(/\D+/gi, '');
  svgsecurity.textContent = securitycode.value;
})

expirationdate.addEventListener('input', () => {
  const maskOptionsDate = {
    mask: '00/00',
    lazy: false
  } 
  IMask(expirationdate, maskOptionsDate).alignCursor();
  expirationdate.value = expirationdate.value.replace(/\D+/, '');
  svgexpire.textContent = expirationdate.value.replace(/(\d{2})(\d{2})/gi, '$1/$2')
})

//IMask(cardnumber, mask[9].mask);

cardnumber.addEventListener('input', (event)=> {

  if (event.target.value.length === 6) {
    for (let i = 0; i < mask.length - 1; i++) {
      const regExp = new RegExp(mask[i]?.regex);
      const res = regExp.test(event.target.value);
        if (res) {
          console.log('res');
          IMask(event.target, mask[i].mask);
          cclogo.innerHTML = mask[i].logo;
          swapColor(lightcolor, darkcolor, mask[i].color);
          ccicon.innerHTML = mask[i].icon;
          return
        }
        if (!res) {
          console.log('!res');

          IMask(event.target, mask[9].mask);
          cclogo.innerHTML = '';
          swapColor(lightcolor, darkcolor, mask[9].color);
          ccicon.innerHTML = '';
        }
    }
  }
  svgnumber.textContent = event.target.value;
});



