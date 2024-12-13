"use strict";

const studentName = prompt("Enter your name:");
const randomValue = Math.floor(Math.random() * 4) + 1;

let house;
if (randomValue === 1) {
  house = "Gryffindor";
  } else if (randomValue === 2) {
  house = "Slytherin";
  } else if (randomValue === 3){
        house = "Hufflepuff";
  } else if (randomValue === 4) {
        house = "Ravenclaw";
}


document.querySelector("#result").innerHTML = `${studentName}, you are ${house}.`;
