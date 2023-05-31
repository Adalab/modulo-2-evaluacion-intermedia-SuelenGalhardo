'use strict';

const select = document.querySelector('.js__select');
const input = document.querySelector('.js__input');
const btn = document.querySelector('.js__btn');
const saldo = document.querySelector('.js__saldo');
const result = document.querySelector('.js__result');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

btn.addEventListener('click', () => {
  const selectValue = select.value;
  const randomNumber = getRandomNumber(6);
  console.log(selectValue, randomNumber);
  if (selectValue == randomNumber) {
    result.innerHTML = 'Has ganado el doble de lo apostado';
  } else {
    result.innerHTML = 'Has perdido lo apostado';
  }
});
