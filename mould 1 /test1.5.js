"use strict";

const year = parseInt(prompt("Enter a year:"));
let isLeapYear;
let result;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
    } else {
        isLeapYear = true;
    }
} else {
    isLeapYear = false;
}

if (isLeapYear) {
    result = `${year} is a leap year.`;
} else {
    result = `${year} is not a leap year.`;
}

document.querySelector("#result").innerHTML = result