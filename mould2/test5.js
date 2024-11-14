let numbers = []
let number = parseInt(prompt('Enter your number.'))
numbers.push(number)
while (true){
  number = parseInt(prompt('Enter your number.'));
  if (numbers.includes(number)){
    numbers.sort(function(a,b){return a-b});
  alert(`The number ${number} already exists!`);
  break;}
  else{
    numbers.push(number);
  }
}
console.log(numbers)