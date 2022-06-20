// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21



let userName = prompt("nome");
console.log(userName)

let userLastName = prompt("cognome");
console.log(userLastName)

let userColor = prompt("colore preferito");
console.log(userColor)

let userPassword = userName + userLastName + userColor + '21';
console.log(userPassword)

document.getElementById('result').innerHTML = `La tua password é; ${userPassword}`;
