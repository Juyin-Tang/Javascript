"use strict";

const confirmCalculation = confirm("Should I calculate the square root?");

if (confirmCalculation) {
    const number = Number(prompt("Enter a number:"));
    if (number < 0) {
        document.querySelector("#result").innerHTML = "The square root of a negative number is not defined.";
    } else {
        const squareRoot = Math.sqrt(number);
        document.querySelector("#result").innerHTML = `The square root of ${number} is ${squareRoot}.`;
    }
} else {
    document.querySelector("#result").innerHTML = "The square root is not calculated.";
}
