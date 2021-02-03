'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function() {
  money = prompt('Ваш месячный доход?');

  while (!isNumber(money)){
    money = prompt('Ваш месячный доход?');
  }
};

start();

let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
// let expenses1 = prompt('Введите обязательную статью расходов?');
// let amount1 = +prompt('Во сколько это обойдется?');
// let expenses2 = prompt('Введите обязательную статью расходов?');
// let amount2 = +prompt('Во сколько это обойдется?'); 
let mission = 120000;
let period = 5;

let showTypeOf = function (data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

let getExpensesMonth = function () {

  let sum = 0;

  for (let i = 0; i < 2; i++) {

      expenses [i] = prompt('Введите обязательную статью расходов?');
      
      sum += +prompt('Во сколько это обойдется?');
      
      while (!isNumber(sum)){
        sum = prompt('Во сколько это обойдется?');
      }
  };
  return sum; 
};

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function () {
  return money - expensesAmount;
};
let accumulatedMonth = getAccumulatedMonth();

let budgetDay = Math.floor(accumulatedMonth/30);

let getTargetMonth = function () {
  if (getTargetMonth > 0) {
    console.log('Срок достижения цели в месяцах:', getTargetMonth());
  } else {
    console.log('Цель не будет достигнута');
  }
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
console.log(getTargetMonth());
console.log('Бюджет на день:', budgetDay);
console.log(getStatusIncome());








// console.log('Период равен', period, 'месяцев');
// console.log('Цель заработать', mission, 'рублей');
// console.log(addExpenses);
// console.log('Бюджет на месяц:', budgetMonth);
// console.log('Цель будет достигнута за', idea, 'месяцев(-а)');
// console.log(addExpenses.split(', '));
// console.log(deposit);
// console.log(expenses1);
// console.log(amount1);
// console.log(expenses2);
// console.log(amount2);



