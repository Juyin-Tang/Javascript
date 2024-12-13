'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById("target");

for (let name of names) {
    const li = document.createElement("li");
    li.textContent = name;
    target.appendChild(li);
}
