"use strict";
const num1 = Number(prompt("Enter the first integer:"));
const num2 = Number(prompt("Enter the second integer:"));
const num3 = Number(prompt("Enter the third integer:"));


const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;


const resultHTML = `
    <p>The sum of the numbers is: ${sum}</p>
    <p>The product of the numbers is: ${product}</p>
    <p>The average of the numbers is: ${average}</p>`;

document.querySelector("#results").innerHTML = resultHTML;