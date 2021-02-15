'use strict';

let starts = document.getElementById('start'),
    btn2 = document.getElementsByTagName('button')[1],
    btn1 = document.getElementsByTagName('button')[0],
    checkbox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName('result-total')[0],
    budgetDayValue = document.getElementsByClassName('result-total')[1],
    expensesMonthValue = document.getElementsByClassName('result-total')[2],
    additionalIncomeValue = document.getElementsByClassName('result-total')[3],
    additionalExpensesValue = document.getElementsByClassName('result-total')[4],
    incomePeriodValue = document.getElementsByClassName('result-total')[5],
    targetMonthValue = document.getElementsByClassName('result-total')[6],
    salary = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-items>.income-title'),
    incomeAmount = document.querySelector('.income-items>.income-amount'),
    expensesTitle = document.querySelector('.expenses-items>.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    incomeItem = document.querySelectorAll('.income-items');

periodSelect.addEventListener('input', function(){
    let period = document.querySelector('.period-amount'); 
    period.innerHTML = periodSelect.value;
});


let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

salary.addEventListener("input", ButtonED);
function ButtonED(){
  if (salary.value === ""){
    starts.disabled = true;
  } else {
    starts.disabled = false;
  }
}
ButtonED();

let temp;

let appData = {
    income: {},
    addIncome: [],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    budget: 0, 
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    persentDeposit: 0,
    moneyDeposit: 0,
    start: function() {
      // if(salary.value === ''){
      //   alert('Ошибка, поле "Месячный доход" должно быть заполнено!')
      //   return;
      // }
      appData.budget = +salary.value;

      appData.getExpenses();
      appData.getIncome();
      appData.getExpensesMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getBudget();

      appData.showResult();
    },
    showResult: function(){
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = appData.getTargetMonth(); 
      incomePeriodValue.value = appData.calcSavedMoney();
      periodSelect.addEventListener('input', function(){
        incomePeriodValue.value = appData.calcSavedMoney();
      });
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btn2);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3){
          btn2.style.display = 'none';
        }
    },
    getExpenses: function(){
      expensesItems.forEach(function(item){
          let itemExpenses = item.querySelector('.expenses-title').value;
          let cashExpenses = item.querySelector('.expenses-amount').value;
          if(itemExpenses !== '' && cashExpenses !== ''){
            appData.expenses[itemExpenses] = cashExpenses;
          }
      });
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btn1);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3){
          btn1.style.display = 'none';
        }
    },
    getIncome: function(){
      incomeItems.forEach(function(item){
          let itemIncome = item.querySelector('.income-title').value;
          let cashIncome = +item.querySelector('.income-amount').value;
          if(itemIncome !== '' && cashIncome !== ''){
            appData.income[itemIncome] = cashIncome;
          }
          for(let key in appData.income){
          appData.incomeMonth += +appData.income[key];
        }
      });
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
          item = item.trim();
          if ( item !== ''){
            appData.addExpenses.push(item);
          }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
          let itemValue = item.value.trim();
          if(itemValue !== ''){
            appData.addIncome.push(itemValue);
          }
        });
    },
    getExpensesMonth: function () {
      for (let key in appData.expenses){
        appData.expensesMonth += +appData.expenses[key];
      }
      return appData.expensesMonth;
    },
    getBudget: function () {
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
      
      // return money - expensesAmount;
    },
    getTargetMonth: function () {
      return Math.ceil(targetAmount.value / appData.budgetMonth);
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
      return appData.budgetMonth * periodSelect.value;
    }
};

btn2.addEventListener('click', appData.addExpensesBlock);
btn1.addEventListener('click', appData.addIncomeBlock);

start.addEventListener('click', appData.start);



// if (appData.getTargetMonth() > 0){
//   console.log('Срок достижения цели в месяцах:', appData.getTargetMonth());
// } else if (appData.getTargetMonth() < 0){
//   console.log('Цель не будет достигнута');
// }