'use strict';

let starts = document.getElementById('start'),
calcClearButton = document.getElementById('cancel'),
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
    periodAmount = document.querySelector('.period-amount'),
    incomeItem = document.querySelectorAll('.income-items');
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

class appData{
  constructor(){
    this.income= {};
    this.addIncome= [];
    this.incomeMonth= 0;
    this.expenses= {};
    this.addExpenses= [];
    this.deposit= false;
    this.budget= 0; 
    this.budgetDay= 0;
    this.budgetMonth= 0;
    this.expensesMonth= 0;
    this.persentDeposit= 0;
    this.moneyDeposit= 0;
  }
  
  start () {
      if (salary.value == '') {
            return;
        }

      this.budget = +salary.value;
      this.getExpenses();
      this.getIncome();
      this.getExpensesMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.getBudget();
      this.showResult();
      this.disableFields();
      
  }
  reset () {
        salary.value = '';
        additionalExpensesValue.value = '';
        targetAmount.value = '';
        periodSelect.value = '1';
        periodAmount.textContent = '1';

        starts.style.display="block";
        calcClearButton.style.display="none";

        btn1.style.display = "block";
        btn2.style.display = "block";

        const income = document.querySelectorAll('.income-items')
        income.forEach((item, index) => {
            if (index !== 0) item.remove();
        })

        const expenses = document.querySelectorAll('.expenses-items')
        expenses.forEach((item, index) => {
            if (index !== 0) item.remove();
        })

        const main = document.querySelectorAll('.data input');
        const result = document.querySelectorAll('.result input');

        main.forEach((item) => {
            if (item.type == "range") {
                item.disabled = false;
                return;
            }
            item.style.backgroundColor = "white";
            item.style.opacity = 1;
            item.disabled = false;
            item.value = '';
        });

        result.forEach((item) => {
            if (item.placeholder == '0') item.value = '0';

            if (item.placeholder == "Наименования") item.value = "Наименования";

            if (item.placeholder == "Срок") item.value = "Срок";
        });

        this.budget = 0;
        this.income = {};
        this.addIncome = [];
        this.incomeMonth = 0;
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
    }
    disableFields () {
        starts.style.display="none";
        calcClearButton.style.display="block";
        const main = document.querySelectorAll('.data input');
        main.forEach((item) => {
            if (item.type == "range") {
                item.disabled = false;
                return;
            }
            item.style.backgroundColor = "#cdd0da";
            item.style.opacity = 0.9;
            item.disabled = true;
        });
    }
    showResult (){
      const _this = this;
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = this.budgetDay;
      expensesMonthValue.value = this.expensesMonth;
      additionalExpensesValue.value = this.addExpenses.join(', ');
      additionalIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = this.getTargetMonth(); 
      incomePeriodValue.value = this.calcPeriod();
      periodSelect.addEventListener('input', function () {
        incomePeriodValue.value = _this.calcPeriod();
        });
    }
    addExpensesBlock () {
        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btn2);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3){
          btn2.style.display = 'none';
        }
    }
    getExpenses () {
      expensesItems.forEach((item) =>{
          const itemExpenses = item.querySelector('.expenses-title').value;
          const cashExpenses = item.querySelector('.expenses-amount').value;
          if(itemExpenses !== '' && cashExpenses !== ''){
            this.expenses[itemExpenses] = +cashExpenses;
          }
      });
    }
    addIncomeBlock () {
        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btn1);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3){
          btn1.style.display = 'none';
        }
    }
    getIncome () {
      incomeItems.forEach((item) => {
          const itemIncome = item.querySelector('.income-title').value;
          const cashIncome = +item.querySelector('.income-amount').value;
          if(itemIncome !== '' && cashIncome !== ''){
            this.income[itemIncome] = +cashIncome;
          }
          for(const key in this.income){
          this.incomeMonth += this.income[key];
        }
      });
    }
    getAddExpenses () {
        const addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) =>{
          item = item.trim();
          if ( item !== ''){
            this.addExpenses.push(item);
          }
        });
    }
    getAddIncome () {
        additionalIncomeItem.forEach((item) =>{
          const itemValue = item.value.trim();
          if(itemValue !== ''){
            this.addIncome.push(itemValue);
          }
        });
    }
    getExpensesMonth () {
      for (const key in this.expenses){
        this.expensesMonth += +this.expenses[key];
      }
      return this.expensesMonth;
    }
    getBudget() {
      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
      this.budgetDay = Math.floor(this.budgetMonth / 30);
    }
    getTargetMonth () {
      return Math.ceil(targetAmount.value / this.budgetMonth);
    }
    getStatusIncome () {
      if (this.budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
      } else if (600 < this.budgetDay && this.budgetDay < 1200) {
        return ('У вас средний уровень дохода');
      } else if (0 < this.budgetDay && this.budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
      } else if (this.budgetDay < 0) {
        return ('Что-то пошло не так');
      }
    }
    getInfoDeposit () {
      if(appData.deposit){
        do{appData.percentDeposit = prompt('Какой годовой процент');}
        while(!isNumber(appData.percentDeposit));
        do{appData.moneyDeposit = prompt('Какая сумма заложена');}
        while(!isNumber(appData.moneyDeposit));
      }
    }
    changePeriodValue() {
        periodAmount.textContent = periodSelect.value;
    }
    calcPeriod () {
        return this.budgetMonth * periodSelect.value;
    }
    initApp () {
        const _this = this;
        starts.disabled = true;
        const startFunction = this.start.bind(this);
        const allInputs = document.querySelectorAll('.data input[type= "text"]');
        starts.addEventListener('click', function () {
            startFunction();
            starts.style.display = 'none';
            calcClearButton.style.display = 'block';
            btn1.disabled = true;
            btn2.disabled = true;
            allInputs.forEach(item => {
                item.disabled = true;
            });
        });
        calcClearButton.addEventListener('click', () => {
            this.reset();
            starts.style.display = 'block';
            calcClearButton.style.display = 'none';
            btn1.disabled = false;
            btn2.disabled = false;
            allInputs.forEach(item => {
                item.disabled = false;
            });
        });
        btn1.addEventListener('click', function () {
            _this.addIncomeBlock();
        });
        btn2.addEventListener('click', function () {
            _this.addExpensesBlock();
        });
        periodSelect.addEventListener('input', this.changePeriodValue);
    
        starts.disabled = true;
        salary.addEventListener('input', function () {
            if (salary.value !== '') {
                starts.disabled = false;
            }
        });
    };
};

const appdata = new appData();
console.log(appdata);
appdata.initApp();
