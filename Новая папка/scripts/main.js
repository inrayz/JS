'use strict'

const start = document.getElementById('start');

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