// Exercicio 4 - Contador de Vogais
// Crie uma função chamada contarVogais que recebe uma string como parâmetro e retorna o número de vogais (a, e, i, o, u) presentes na string. 
// A função deve ser case-insensitive, ou seja, contar tanto vogais maiúsculas quanto minúsculas.

// Função para contar as vogais
function contarVogais(string)
{
    string = string.toLowerCase().normalize("NFD") ; // Transforma a string em minúscula e remove acentos
    let contador = 0; // Variável para contar as vogais
    
    for(let i = 0 ; i < string.length ; i++)
    {
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u')
        {
            contador++;
        }
    }
    return contador;
}

// Função para contar as vogais Otimizada.
function contarVogaisO(string) {
    return (string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(/[aeiou]/gi) || []).length;
}

// Teste da função
console.log(contarVogais("xyz")); // Deve imprimir 0
console.log(contarVogais("Teste")); // Deve imprimir 2
console.log(contarVogais("Olá, mundo!")); // Deve imprimir 4
console.log(contarVogais("Teste de Vogais")); // Deve imprimir 6
console.log(contarVogais("JavaScript é incrível!")); // Deve imprimir 7