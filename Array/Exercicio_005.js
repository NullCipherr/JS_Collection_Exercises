// Exercicio 5 - Arrays
//
// Array de números aleatórios
//
// Crie um array vazio e utilize um loop for para adicionar 100 números aleatórios
// entre 1 e 100 no array.
// Depois, calcule a soma dos resultados

let numeros = [] ;
let numeros_size = 100 ;


for(let i = 0; i < numeros_size; i++)
{
    numeros.push(Math.floor(Math.random() * 100) + 1); // Adiciona um número aleatório entre 1 e 100 no final do array.
}

let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual) ; // Soma todos os valores do array.
console.log("Array de Números: ", numeros) ; // Exibe o array de números.
console.log("Soma dos Números: ", soma) ; // Exibe a soma dos números.