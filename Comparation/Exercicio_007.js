// Exercicio 7 - Operador Ternário
//
// Crie uma função que verifica se um número é positivo, negativo ou zero.

// Função que verifica se um número é positivo, negativo ou zero.
function verificaNumero(numero)
{
    const resultado = numero > 0 ? "O número é positivo" : numero < 0 ? "O número é negativo" : "O número é zero" ;
    return resultado;
}

// Teste da aplicação
console.log(verificaNumero(10)); // O número é positivo
console.log(verificaNumero(-10)); // O número é negativo
console.log(verificaNumero(0)); // O número é zero
