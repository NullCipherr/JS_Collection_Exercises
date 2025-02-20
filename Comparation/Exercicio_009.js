// Exercicio 9 - Operador Ternário
//
// Crie uma função que verifica se um número está dentro de um intervalo.

// Função que verifica se um número está dentro de um intervalo
function verificaIntervalo(numero, minimo, maximo)
{
    const resultado = numero >= minimo && numero <= maximo ? "O número está dentro do intervalo" : "O número está fora do intervalo";
    return resultado;
}

// Teste da função
console.log(verificaIntervalo(5, 0, 10)); // O número está dentro do intervalo
console.log(verificaIntervalo(15, 0, 10)); // O número está fora do intervalo
console.log(verificaIntervalo(0, 0, 10)); // O número está dentro do intervalo
console.log(verificaIntervalo(10, 0, 10)); // O número está dentro do intervalo
console.log(verificaIntervalo(-5, 0, 10)); // O número está fora do intervalo
console.log(verificaIntervalo(15, 0, 10)); // O número está fora do intervalo
console.log(verificaIntervalo(5, 10, 20)); // O número está fora do intervalo