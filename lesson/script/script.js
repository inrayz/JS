'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function() {
  do{
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
  money = +money;
}; 

start();

let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 120000;
let period = 5;

let showTypeOf = function (data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

let temp;

let getExpensesMonth = function () {

  let sum = 0;
  
  for (let i = 0; i < 2; i++) {
    expenses [i] = prompt('Введите обязательную статью расходов?');
      
    do{
      temp = prompt('Во сколько это обойдется?')
    } while(!isNumber(temp));
    sum += +temp;
  }
  
  return sum; 
};

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function () {
  return money - expensesAmount;
};
let accumulatedMonth = getAccumulatedMonth();

let budgetDay = Math.floor(accumulatedMonth/30);

let getTargetMonth = function () {
  return Math.ceil(mission / accumulatedMonth);
};


let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (600 < budgetDay && budgetDay < 1200) {
    return ('У вас средний уровень дохода');
  } else if (0 < budgetDay && budgetDay < 600) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0) {
    return ('Что-то пошло не так');
  }
};

console.log('Расходы за месяц:', expensesAmount);
console.log(addExpenses.toLowerCase().split(','));
console.log('Бюджет на день:', budgetDay);
if (getTargetMonth() > 0){
  console.log('Срок достижения цели в месяцах:', getTargetMonth());
} else if (getTargetMonth() < 0){
  console.log('Цель не будет достигнута');
}
console.log(getStatusIncome());
