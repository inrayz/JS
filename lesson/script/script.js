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
    persentDeposit: 0,
    moneyDeposit: 0,

    asking: function(){

        if(confirm('Есть ли у вас дополнительный источник заработка?')){
          let itemIncome;
          let cashIncome;
          do {itemIncome = prompt('Какой у вас дополнительный зароботок?');}
          while(isNumber(itemIncome) || itemIncome.trim() === '');
          do{cashIncome = prompt('Сколько в месяц вы на это зарабатываете?');}
          while(!isNumber(cashIncome));
          appData.income[itemIncome] = cashIncome;
        }

        let addExpenses;
        do{addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');}
        while(isNumber(addExpenses) || addExpenses.trim() === '');
        appData.addExpenses = addExpenses.split(',');
        appData.addExpenses = appData.addExpenses.map(item => item.trim().slice(0, 1).toUpperCase() + item.trim().toLowerCase().slice(1));
        console.log(appData.addExpenses);
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
          for (let i = 0; i < 2; i++) {
           let exps;
           do{exps = prompt('Введите обязательную статью расходов?');}
          while(isNumber(exps) || exps.trim() === ''); 
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
    getInfoDeposit: function(){
      if(appData.deposit){
        do{appData.percentDeposit = prompt('Какой годовой процент');}
        while(!isNumber(appData.percentDeposit));
        do{appData.moneyDeposit = prompt('Какая сумма заложена');}
        while(!isNumber(appData.moneyDeposit));
      }
    },
    calcSavedMoney: function(){
      return appData.budgetMonth * appData.period;
    }
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
appData.getInfoDeposit();
appData.calcSavedMoney();


const starts = document.getElementById('start');

const btn1 = document.getElementsByTagName('button')[0];
const btn2 = document.getElementsByTagName('button')[1];
const checkbox = document.querySelector('#deposit-check');
const additional = document.querySelectorAll('.additional_income-item');
const budgetDay = document.getElementsByClassName('result-total')[1];
const expensesMonth = document.getElementsByClassName('result-total')[2];
const additionalIncome = document.getElementsByClassName('result-total')[3];
const additionalExpenses = document.getElementsByClassName('result-total')[4];
const incomePeriod = document.getElementsByClassName('result-total')[5];
const targetMonth = document.getElementsByClassName('result-total')[6];
const salary = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-items>.income-title');
const incomeAmount = document.querySelector('.income-items>.income-amount');
const expensesTitle = document.querySelector('.expenses-items>.expenses-title');
const expensesAmount = document.querySelector('.expenses-items>.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');


console.log(start);
console.log(btn1);
console.log(btn2);
console.log(checkbox);
console.log(additional);
console.log(budgetDay);
console.log(expensesMonth);
console.log(additionalIncome);
console.log(additionalExpenses);
console.log(incomePeriod);
console.log(targetMonth);
console.log(salary);
console.log(incomeTitle);
console.log(incomeAmount);
console.log(expensesTitle);
console.log(expensesAmount);
console.log(additionalExpensesItem);
console.log(targetAmount);
console.log(periodSelect);