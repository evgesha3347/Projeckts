'use strict';
let money, time;

function start(){
    money = +prompt("Ваш бюджет за месяц", "");
     time = prompt("Введите дату в формате YYYY-MM-DD", "");

     while(isNaN(money) || (money) == "" || (money) == null){
        money = +prompt("Ваш бюджет за месяц", "");
     }
}
start();
     
let  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: true
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
    
        if  (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done"),
            appData.expenses[a] = b;
        }   else 
            {
             console.log("Результат");
            i=i-1;
            }
    }
}
chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на один день= " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
if (appData.moneyPerDay < 100){
    console.log("Минимальный доход ");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний достаток");  
}else if (appData.moneyPerDay > 2000){
    console.log("Высокий доход");
}else{
    console.log("Произошла ошибка");
}
}
detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");

        appData.monthIncome = save/100/12*percent;
        console.log(appData.monthIncome);
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
    }
}
checkSavings();

function chooseOptExpenses(){
    let notExpenses = +prompt("Cтатья не обязательных расходов", "");
        for (let i = 0; i < 3; i++){
            notExpenses = +prompt("Cтатья не обязательных расходов", "");
        }
}
chooseOptExpenses();


let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}