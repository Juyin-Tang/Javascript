"use strict";


function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

alert("Let's roll a dice until we get the sides of dice!");

let sides = parseInt(prompt("Please enter the number of the sides of dice"));
let result = "<ul>\n";
while (true) {
    let roll = rollDice(sides);
    result += `\t<li>${roll}</li>\n`;

    if (roll === sides) {
        break;
    }
}
result += "</ul>\n";

document.querySelector("body").innerHTML = result;