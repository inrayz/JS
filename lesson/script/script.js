'use strict';

let money = +prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?'); 
let mission = 120000;
let period = 5;
let budgetMonth = money - amount1 - amount2;
let idea = Math.ceil(mission/budgetMonth);
let budgetDay = budgetMonth/30;


console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей');
console.log(addExpenses);
console.log(addExpenses.split(', '));
console.log('Бюджет на месяц:', budgetMonth);
console.log('Цель будет достигнута за', idea, 'месяцев(-а)');
console.log('Бюджет на день:', budgetDay);

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (600 < budgetDay && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (0 < budgetDay && budgetDay < 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что-то пошло не так');
}

// console.log(addExpenses.split(', '));
// console.log(deposit);
// console.log(expenses1);
// console.log(amount1);
// console.log(expenses2);
// console.log(amount2);



