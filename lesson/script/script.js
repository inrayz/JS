'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let createGame = function() {
  let a = Math.floor(Math.random() * 101);
  console.log(a);
  
  let getNumber = function(){
    let getWish = function(flag){
      if(flag){
        getNumber();
      } else{
        alert('Спасибо, что поирали');
      }
    };

    let wish,
        userNumber = prompt('Угадайте число от 1 до 100');

    if(userNumber === null){
      alert('В следующий раз');
    } 
    else if(!isNumber(userNumber) || parseFloat(userNumber) > 100){
      wish = confirm('Введите число от 1 до 100');
      getWish(wish);
    }
    else if (userNumber == a){
      alert('Ты угадал!!!');
    }
    else if (userNumber > a){
      wish = confirm('Загаданное число меньше. Попробуй еще раз');
      getWish(wish);
    }
    else if (userNumber < a){
      wish = confirm('Загаданное число больше. Попробуй еще раз');
      getWish(wish);
    }
  };
  return getNumber;
};

let game = createGame();
game();
console.dir(game);