"use strict";

function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function calculateProbability(numDice, desiredSum) {
    let count = 0;
    let numSimulations = 10000;

    for (let i = 0; i < numSimulations; i++) {
        let sum = 0;
        for (let j = 0; j < numDice; j++) {
            sum += rollDie(6); // Roll a 6-sided die
        }
        if (sum === desiredSum) {
            count++;
        }
    }

    let probability = (count / numSimulations) * 100;
    return probability.toFixed(2);
}


let numDice = parseInt(prompt("Enter the number of dice:"), 10);
let desiredSum = parseInt(prompt("Enter the desired sum of the eye numbers:"), 10);

// Calculate the probability
let probability = calculateProbability(numDice, desiredSum);

// Display the result
document.querySelector("#result").innerHTML = `Probability to get sum ${desiredSum} with ${numDice} dice is ${probability}%`;
