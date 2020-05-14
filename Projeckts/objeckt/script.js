// //'use strict';
// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.color = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options){
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);



// //arr.pop();
// //arr.push("5");
// // arr.shift();
// // arr.unshift("1");

// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }
let arr = [1, 2, 3, 4, 5, 45, 32, 234];
// arr.forEach(function(item, i, arr ) {
//     console.log(`${i}  внутри массива ${arr}`);   
// });

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));

