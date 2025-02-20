// Exercicio 5 - Operador Ternário
//
// Crie uma função que verifica se um número é par ou impar, utilizando o operador ternário.

// Função para verificar se um número é par ou impar
function verificaNumero(numero)
{
    const resultado = numero % 2 === 0 ? "O número é par" : "O número é impar" ;
    return resultado ;
}

// Teste da aplicação
console.log(verificaNumero(0)) ; // O número é par
console.log(verificaNumero(1)) ; // O número é impar
console.log(verificaNumero(2)) ; // O número é par
console.log(verificaNumero(3)) ; // O número é impar
console.log(verificaNumero(4)) ; // O número é par
console.log(verificaNumero(5)) ; // O número é impar
console.log(verificaNumero(6)) ; // O número é par
console.log(verificaNumero(7)) ; // O número é impar
console.log(verificaNumero(8)) ; // O número é par
console.log(verificaNumero(9)) ; // O número é impar
console.log(verificaNumero(10)) ; // O número é par
