//Q1(c) : Sum of all numbers in an array using IIFE function

let array = [10,20,30,40,50];
let sum = (function(){
    return array.reduce((a,b)=> a+b)

})();

console.log(sum);