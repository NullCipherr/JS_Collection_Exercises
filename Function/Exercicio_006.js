// Exercicio 6 - Funções
//
// Somar Elemenentos do Array e Encontrar o maior número
//
// Crie uma função que receba um array de números e retorne um objeto que contenha as seguintes informações:
// - A quantidade de elementos do array
// - A soma de todos os elementos do array
// - O maior número do array

// Função que recebe um Array de números e retorna o maior número
function maiorArray(array)
{
    let maior = array[0] ; // Inicializa a variável maior com o primeiro elemento do Array

    for(let i = 0 ; i < array.length; i++)
    {
        maior = array[i] > maior ? array[i] : maior ;
    }

    return maior ;
}

// Função que recebe um Array de números e retorna um objeto com as informações solicitadas
function sumArray(array)
{
    let soma = 0 ;

    for(let i = 0 ; i < array.length; i++)
    {
        soma += array[i];
    }
    console.log("-------------------------------------------------") ;
    console.log("A quantidade de elementos do Array é: " + array.length) ;
    console.log("A Soma dos elementos é: " + soma) ;
    console.log("O maior número do Array é: " + maiorArray(array)) ;
    console.log("-------------------------------------------------") ;
}

// Testes da Função
sumArray([1, 2, 3, 4]) ;
sumArray([10, 20, 30, 40, 50]) ;
sumArray([100, 200, 300, 400, 500, 600]) ;



