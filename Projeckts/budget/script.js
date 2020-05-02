'use strict';

let  money = +prompt("Ваш бюджет за месяц", ""),
     time = prompt("Введите дату в формате YYYY-MM-DD", "");
     
let  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: false
};

for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if  (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.lenght < 50) {
        console.log("done");
        appData.expenses[a] = b;
       // console.log(b);
    }   else {
         console.log("Результат");
         i--;
    }
    i++;
};

appData.moneyPerDay = appData.budget /30;

alert("Бюджет на один день= " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Минимальный доход ");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний достаток");  
}else if (appData.moneyPerDay > 2000){
    console.log("Высокий доход");
}else{
    console.log("Произошла ошибка");
}


