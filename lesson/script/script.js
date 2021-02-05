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

let temp;

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money, 
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
          for (let i = 0; i < 2; i++) {
           const exps = prompt('Введите обязательную статью расходов?');
          do{
            temp = prompt('Во сколько это обойдется?')
          } while(!isNumber(temp));
          appData.expenses[exps] = +temp;
        }
    },
    getExpensesMonth: function () {
      for (let key in appData.expenses){
        appData.expensesMonth += appData.expenses[key];
      }
      return appData.expensesMonth;
    },
    getBudget: function () {
      appData.budgetDay = Math.floor((appData.budget - appData.expensesMonth) / 30);
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      // return money - expensesAmount;
    },
    getTargetMonth: function () {
      return Math.ceil(appData.mission / appData.budgetMonth);
    },
    getStatusIncome: function () {
      if (appData.budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
      } else if (600 < appData.budgetDay && appData.budgetDay < 1200) {
        return ('У вас средний уровень дохода');
      } else if (0 < appData.budgetDay && appData.budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
      } else if (appData.budgetDay < 0) {
        return ('Что-то пошло не так');
      }
    },
};

appData.asking();

appData.getExpensesMonth();

appData.getBudget();

appData.getTargetMonth();

appData.getStatusIncome();

console.log('Расходы за месяц:', appData.expensesMonth);
if (appData.getTargetMonth() > 0){
  console.log('Срок достижения цели в месяцах:', appData.getTargetMonth());
} else if (appData.getTargetMonth() < 0){
  console.log('Цель не будет достигнута');
}
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let key in appData){
  console.log('Свойство: ' + key + ' Значение: ' + appData[key]);
}