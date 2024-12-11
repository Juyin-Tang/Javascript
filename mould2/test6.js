function random_number(){
  return number= Math.floor(Math.random()*6)+1;
}

alert('Roll a dice till 6')

let result = '<ul>\n'
while(true){
  let dice = random_number();
  result += `\t<li>${dice}</li>\n`;

  if (dice === 6){
    break;
  }
}
result += '<ul>\n';

document.querySelector("body").innerHTML = result;