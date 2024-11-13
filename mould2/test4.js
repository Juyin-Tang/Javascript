

let numbers = []

let number = Number(prompt('Enter your number'))

while (0 !== number){
  numbers.push(number)
  number = Number(prompt('Enter your number'))
}
console.log(numbers.sort().reverse());