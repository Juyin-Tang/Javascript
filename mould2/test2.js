let numbers = parseInt(prompt('Enter the number of participant'));
  let names = [];
  for (let i = 0; i < numbers; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}`);
    names.push(name);
  }
  names.sort();

  document.querySelector("body").innerHTML += "<ol>";
  for (let name of names){
    document.querySelector("body").innerHTML += `<li>${name}</li>`;
  }
  document.querySelector("body").innerHTML += "</ol>";
