// Exercicio 5 - Operador Ternário
//
// Verifique se a pessoa é maior de idade ou menor de idade, utilizando o operador ternário.

// Função para verificar se a pessoa é maior de idade ou menor de idade
function verificaIdade(idade)
{
    const resultado = idade >= 18 ? "A pessoa é maior de idade" : "A pessoa é menor de idade" ;
    return resultado ;
}

// Teste da aplicação
console.log(verificaIdade(5)) ; // A pessoa é menor de idade
console.log(verificaIdade(16)) ; // A pessoa é menor de idade
console.log(verificaIdade(17)) ; // A pessoa é menor de idade
console.log(verificaIdade(18)) ; // A pessoa é maior de idade
console.log(verificaIdade(19)) ; // A pessoa é maior de idade
console.log(verificaIdade(20)) ; // A pessoa é maior de idade
console.log(verificaIdade(21)) ; // A pessoa é maior de idade