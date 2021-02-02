'use strict';

let money = +prompt('Ваш месячный доход?');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?'); 
let mission = 120000;
let period = 5;

let showTypeOf = function (data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getExpensesMonth = function (amount1, amount2) {
  return amount1 + amount2; 
};

let getAccumulatedMonth = function (money, amount1, amount2) {
  return money - amount1 - amount2;
};
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

let budgetDay = Math.floor(accumulatedMonth/30);

let getTargetMonth = function (mission, accumulatedMonth) {
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

console.log('Расходы за месяц:', getExpensesMonth(amount1, amount2));
console.log(addExpenses.split(', '));
console.log('Срок достижения цели в месяцах:', getTargetMonth(mission, accumulatedMonth));
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



