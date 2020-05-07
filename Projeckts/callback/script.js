'use strict';
function LearnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошел 3й урок!");
}
LearnJS("JavaScript", done);

function first(){
        setTimeout( function(){
        console.log(1);
    }, 1500 );
}      
function second(){
    console.log(2);
}
first();
second();