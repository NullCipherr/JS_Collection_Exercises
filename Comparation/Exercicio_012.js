// Exercicio 6 - Operador Ternário
//
// Crie uma função que verifica se um ano é bissexto ou não.
// A função deve retornar uma string com a mensagem "O ano é bissexto" ou "O ano não é bissexto".

// Função para verificar se um ano é bissexto
function verificaAnoBissexto(ano)
{
    const resultado = ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0 ? "O ano é bissexto" : "O ano não é bissexto" ;
    return resultado ;
}

// Teste da função
console.log(verificaAnoBissexto(2020)) ; // O ano é bissexto
console.log(verificaAnoBissexto(2021)) ; // O ano não é bissexto
console.log(verificaAnoBissexto(2024)) ; // O ano é bissexto
console.log(verificaAnoBissexto(2100)) ; // O ano não é bissexto
console.log(verificaAnoBissexto(2400)) ; // O ano é bissexto
console.log(verificaAnoBissexto(2000)) ; // O ano é bissexto