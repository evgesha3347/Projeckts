'use strict';

let startBtn = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
    budgetValue = document.getElementsByClassName('budget-value')[0],                            
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],                         //Получить все блоки в правой части программы
    expensesValue = document.getElementsByClassName('expenses-value')[0],                   //через классы (которые имеют класс название-value,     
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],   //начиная с <div class="budget-value"><
    incomValue = document.getElementsByClassName('income-value')[0],                        //div> и заканчивая <div class="yearsavings-value"></div>)
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),     // Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

    expensesItemBtn = document.getElementsByTagName('button')[0],             // Получить кнопки “Утвердить”
    optionalExpensesBtn = document.getElementsByTagName('button')[1], // Получить кнопки “Утвердить”
    countBudgetBtn = document.getElementsByTagName('button')[2],           //и “Рассчитать” через Tag, каждую в своей переменной. 

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    savings = document.querySelector('#savings'),                 // Получить оставшиеся поля через querySelector чекбокс
    chooseIncome = document.querySelector('.choose-income'),       // статьи возможного дохода,
    chooseSum = document.querySelector('.choose-sum'),                   // сумма
    choosePercent = document.querySelector('.choose-percent'),          // процент
    yearValue = document.querySelector('.year-value'),                  // год
    monthValue = document.querySelector('.month-value'),                // месяц
    dayValue = document.querySelector('.day-value'),
    expenseswValue = document.querySelector('.expensesw-value');                 // день
    

let money, time;

// expensesItemBtn.disabled = true;
// optionalExpensesBtn.disabled = true;
// countBudgetBtn.disabled = true;
 

 
startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
    
    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money;   
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if  (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("всё верно");
            appData.expenses[a] = b;
            sum += +b;
        }   else 
            {
            i = i - 1;
            }
    }
    expensesValue.textContent = sum;{
    expenseswValue.textContent = (sum/30).toFixed();    
    }
   
});  

 

optionalExpensesBtn.addEventListener('click', function() {
        for (let i = 0; i < optionalExpensesItem.length; i++){
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
}); 

countBudgetBtn.addEventListener('click', function() {

    if (appData.budget != undefined){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
   
        if (appData.moneyPerDay < 100){
            levelValue.textContent = "Минимальный доход ";
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = "Средний достаток";  
        }else if (appData.moneyPerDay > 2000){
            levelValue.textContent = "Высокий доход";
        }else{
            levelValue.textContent = "Произошла ошибка";
        }
    } else {    
    dayValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
        appData.income = items.split(', ');
        incomValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if (appData.savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings = true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings = true){
      let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
let  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: false,
};