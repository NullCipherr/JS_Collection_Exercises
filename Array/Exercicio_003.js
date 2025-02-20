// Exercicio 3 - Arrays
//
// Array de Notas Musicais
//
// Trabalhe com uma sequência de notas musicais. Crie um array para armazenar as notas musicais e exiba cada uma delas no console.
// Notas musicais: Dó, Ré, Mi, Fá, Sol, Lá, Si
// Inverta a ordem das notas musicais e exiba no console
// Separe as notas musicais com uma virgula e exiba no console

let notas = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
notas.forEach(nota => console.log(nota)) ; // Exibindo as notas musicais no console

console.log(''); // Quebra de linha

notas.reverse(); // Invertendo a ordem das notas musicais
notas.forEach(nota => console.log(nota)) ; // Exibindo as notas musicais no console

console.log(''); // Quebra de linha

let notasSeparadas = notas.join(', ') ; // Separando as notas musicais com uma virgula
console.log(notasSeparadas); // Exibindo as notas musicais no console
