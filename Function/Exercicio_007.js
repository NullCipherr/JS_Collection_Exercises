// Exercicio 7 - Funções
//
// Contar Vogais
//
// Crie uma função que receba uma string e retorne a quantidade de vogais dentro dela.

// Variáveis Globais
const vogais = ["a", "e", "i", "o", "u"] ; // Vogais da Língua Portuguesa

// Função que conta a quantidade de vogais em uma string
function contarVogais(string)
{
    let contador = 0 ; // Contador de Vogais

    // Percorre a string
    for(let i = 0; i < string.length; i++)
    {
        // Se a string[i] estiver dentro do array vogais
        if(vogais.includes(string[i]))
        {
            contador++ ; // Incrementa o contador
        }
    }

    return contador ; // Retorna a quantidade de vogais
}

// Testes da Função
console.log(contarVogais("programacao")) ; // 5
console.log(contarVogais("javascript")) ; // 3
console.log(contarVogais("algoritmo")) ; // 4
console.log(contarVogais("computador")) ; // 4
console.log(contarVogais("notebook")) ; // 4