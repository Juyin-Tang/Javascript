"use strict";

const startYear = Number(prompt("Enter the start year:"));
const endYear = Number(prompt("Enter the end year:"));

let result = "<ul>\n";
for(let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
        } else {
            result += `\t<li>${year}</li>\n`;
        }
    }
}
result += "</ul>\n";

document.querySelector("body").innerHTML = result;