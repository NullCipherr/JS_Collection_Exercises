// Exercicio 5 - Funções
//
// Verificar Palindromo
//
// Crie uma função que receba uma string e verifique se é um palíndromo.
// Um palíndromo é uma palavra que é igual quando lida de trás para frente.

// Função para verificar se é um palíndromo
function isPalindrome(str) 
{
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Testes da Função
console.log(isPalindrome('arara')); // true
console.log(isPalindrome('desenvolvimento')); // false
console.log(isPalindrome('ovo')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('reviver')); // true