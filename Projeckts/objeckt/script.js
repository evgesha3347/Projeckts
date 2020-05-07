//'use strict';
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.color = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options){
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

let arr = [1, 2, 3, 4, 5];

//arr.pop();
arr.push("5");
// arr.shift();
// arr.unshift("1");

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
console.log(arr);
