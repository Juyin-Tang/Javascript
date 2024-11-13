let dog_number = 6
let names = []
for(let i = 0; i < 6;i++){
  let dog_name = prompt(`Enter the dog${i+1} name`);
  names.push(dog_name);
}
names.sort().reverse()
document.querySelector("body").innerHTML += "<ul>";
  for (let name of names){
    document.querySelector("body").innerHTML += `<li>${name}</li>`;
  }
  document.querySelector("body").innerHTML += "</ul>";