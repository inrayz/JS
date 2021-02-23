'use strict';

let day = document.querySelector('#day');
let clock = document.querySelector('#clock');
let good = document.querySelector('#good');
let newYear = document.querySelector('#newYear');

let now = new Date();
  if (now.getDay() === 0) {
    day.textContent = ' Воскресенье';
  }
  if (now.getDay() === 1){
    day.textContent = ' Понедельник';
  }if (now.getDay() === 2) {
    day.textContent = ' Вторник';
  }
  if (now.getDay() === 3){
    day.textContent = ' Среда';
  }if (now.getDay() === 4) {
    day.textContent = ' Четверг';
  }
  if (now.getDay() === 5){
    day.textContent = ' Пятница';
  }if (now.getDay() === 6){
    day.textContent = ' Суббота';
  }
let h = (new Date()).getHours();                  
  if (h > 6 && h < 12) {
    good.textContent = "Доброе утро";
  }                    
  if (h > 11 && h < 18) {
    good.textContent ="Добрый день";
  }                 
  if (h > 18 && h < 24) {
    good.textContent ="Добрый вечер";
  }              
  if (h > 23 || h < 6 ) {
    good.textContent = "Доброй ночи";
  }
function pad(n) {
    if (n < 10){
      return "0" + n;
    }
    return n;
}
let time = setInterval(function() {
  let date = new Date();
  clock.textContent = (pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds()));
}, 1000);
function countTimer(deadline){
  let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000;
      day = Math.floor(timeRemaining / 60 / 60 / 24);
      newYear.textContent = day;
}
countTimer('1 jan 2022');
