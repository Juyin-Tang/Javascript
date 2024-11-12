let numbers = [];

for (let i = 0; i < 5; i++) {
    let number = parseFloat(prompt(`Enter number ${i + 1}:`));
    numbers.push(number);
}

console.log("Numbers in reverse order:");
for (let j = 4; j >= 0; j--) {
    console.log(numbers[j]);
}
