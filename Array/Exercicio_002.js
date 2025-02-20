// Exercicio 2 - Arrays
//
// Array de Planetas
//
// Manipule uma lista de planetas do sistema solar. 

let planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno', 'Plutão'];

// Removendo Plutão da lista de planetas
planetas.splice(8, 1);

// Imprimindo a lista de planetas
console.log('Lista de planetas:');
planetas.forEach(planeta => console.log(planeta));