'use strict';

const select = document.querySelector('.js__select');
const inputApuesta = document.querySelector('.js__input__apuesta');
const btn = document.querySelector('.js__btn');
const saldo = document.querySelector('.js__saldo');
const result = document.querySelector('.js__result');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

btn.addEventListener('click', () => {
  const selectValue = select.value;
  const randomNumber = getRandomNumber(6);

  if (selectValue == randomNumber) {
    const nuevoSaldo = inputApuesta.value * 2 + Number(saldo.innerHTML);
    saldo.innerHTML = nuevoSaldo;
    result.innerHTML = 'Has ganado el doble de lo apostado';
  } else {
    result.innerHTML = 'Has perdido lo apostado, el numero generado fue: ' + randomNumber;
    const nuevoSaldo = Number(saldo.innerHTML) - inputApuesta.value;
    saldo.innerHTML = nuevoSaldo;
  }
});
