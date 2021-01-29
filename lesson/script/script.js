let money = 50000;
let income = 'Фриланс';
let addExpenses = 'Интернет, Заправка, Коммуналка';
let deposit = true;
let mission = 120000;
let period = 5;

console.log(money);
console.log(income);
console.log(deposit);
console.log(addExpenses.length);
console.log('Период равен', period,'месяцев');
console.log('Цель заработать', mission, 'рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let budgetDay = money/30;
console.log(budgetDay);