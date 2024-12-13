"use strict";

function isPrime(integer) {
    if (integer <= 1) {
        return false;
    } else if (integer === 2) {
        return true;
    } else {
        for (let i = 2; i < integer; i++) {
            if (integer % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let result = "";
let integer = parseInt(prompt("Please enter an integer: "));

if (isPrime(integer)) {
    result = `${integer} is a prime number.`;
} else {
    result = `${integer} is not a prime number.`;
}

document.querySelector("#result").innerHTML = result;