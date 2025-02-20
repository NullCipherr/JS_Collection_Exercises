// Exercicio 13 - Operador Ternário
//
// Crie uma função que verifique o maior número entre três números.

// Função para verificar o maior número entre três números
function verificaNumeroMaior(num1, num2, num3)
{
    const resultado = num1 > num2 && num1 > num3 ? "O número 1 é o maior" : num2 > num1 && num2 > num3 ? "O número 2 é o maior" : "O número 3 é o maior" ;
    return resultado ;
}

// Função para verificar o maior número entre dois números
function verificaNumeroMaior(num1, num2)
{
    const resultado = num1 > num2 ? "O número 1 é o maior" : "O número 2 é o maior" ;
    return resultado ;
}

// Teste da função
console.log(verificaNumeroMaior(10, 20, 30)) ; // O número 3 é o maior
console.log(verificaNumeroMaior(30, 20, 10)) ; // O número 1 é o maior
console.log(verificaNumeroMaior(20, 30, 10)) ; // O número 2 é o maior
console.log(verificaNumeroMaior(10, 10, 10)) ; // O número 3 é o maior
console.log(verificaNumeroMaior(10, 10, 20)) ; // O número 3 é o maior
console.log(verificaNumeroMaior(10, 20, 10)) ; // O número 2 é o maior
console.log(verificaNumeroMaior(20, 10, 10)) ; // O número 1 é o maior
console.log(verificaNumeroMaior(10, 10)) ; // O número 2 é o maior
console.log(verificaNumeroMaior(10, 20)) ; // O número 2 é o maior
console.log(verificaNumeroMaior(20, 10)) ; // O número 1 é o maior
console.log(verificaNumeroMaior(10, 10)) ; // O número 2 é o maior