"use strict";

function even(arr) {
    return arr.filter(num => num % 2 === 0);
}

const originalArray = [2, 7, 4, 9, 12];
const evenArray = even(originalArray);

console.log("Original Array:", originalArray);
console.log("Even Numbers Array:", evenArray);