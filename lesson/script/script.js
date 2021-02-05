'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
      do{
        money = prompt('Ваш месячный доход?');
      }
      while (!isNumber(money));
      money = +money;
    }; 
start();


let exps = [];

let temp;

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    sum: 0,
    period: 3,
    budget: money, 
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let sum = 0;
          for (let i = 0; i < 2; i++) {
            exps [i] = prompt('Введите обязательную статью расходов?');
          do{
            temp = prompt('Во сколько это обойдется?')
          } while(!isNumber(temp));
          appData.sum += +temp;
          appData.expenses[exps[i]] = temp;
          appData.expenses[exps[i]] = temp;
          }
        return sum; 
    },
    getExpensesMonth: function () {
    },
    getAccumulatedMonth: function () {
      return money - expensesAmount;
    },
    getTargetMonth: function () {
      return Math.ceil(appData.mission / accumulatedMonth);
    },
};

console.log(appData);

appData.asking();

let expensesAmount = appData.getExpensesMonth();

let accumulatedMonth = appData.getAccumulatedMonth();

let budgetDay = Math.floor(accumulatedMonth/30);

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
console.log('Бюджет на день:', budgetDay);
if (appData.getTargetMonth() > 0){
  console.log('Срок достижения цели в месяцах:', appData.getTargetMonth());
} else if (appData.getTargetMonth() < 0){
  console.log('Цель не будет достигнута');
}
console.log(getStatusIncome());

