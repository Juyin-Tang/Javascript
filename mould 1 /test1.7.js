"use strict";

const numOfRolls = Number(prompt("How many dice do you want to roll?"));
let sum = 0;
for (let i = 0; i < numOfRolls; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }


    document.querySelector("#result").innerHTML = `You rolled ${numOfRolls} dice. The sum of the rolls is ${sum}.`;
