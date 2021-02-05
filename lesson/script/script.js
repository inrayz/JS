'use strict'

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function start (text){
  text = prompt('Введите строку');
  if(isNumber(text) || text.trim() === ''){
    alert('Вы ввели не строку, введите строку');
    start();
  }
  else { 
    console.log(text.trim().slice(0, 30) + '...');
  }
}
start();

