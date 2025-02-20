// Exercicio 9 - Arrays
//
// Array de Arrays
//
// Crie um array que contém outros arrays, como [[1, 2, 3], [4, 5, 6], [7, 8, 9]].
// Use loops aninhados (for) para imprimir cada elemento dos arrays internos.
// Use o método flat para criar um único array com todos os elementos e exiba o resultado.

// Crie um array de arrays, com 3 arrays internos, cada um contendo 3 elementos.
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Exiba os elementos de cada array interno
for(let i = 0 ; i < matriz.length; i++)
{
    for(let j = 0; j < matriz[i].length; j++)
    {
        console.log(matriz[i][j]); // Exibe os elementos de cada array interno
    }
}

let arrayUnico = matriz.flat() ; // Concatena todos os arrays internos em um unico array
console.log("Array Unico: " + arrayUnico); // Exibe o array unico