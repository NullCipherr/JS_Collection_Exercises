// Exercicio 8 - Operador Ternário
//
// Crie uma função que verifica se uma string está vazia.

// Função que verifica se uma string está vazia.
function verificaString(string)
{
    const resultado = string.length === 0 ? "A string está vazia" : "A string não está vazia" ;
    return resultado ;
}

// Teste da aplicação
console.log(verificaString("")); // A string está vazia
console.log(verificaString("Teste")); // A string não está vazia
console.log(verificaString(" ")); // A string não está vazia
console.log(verificaString("  ")); // A string não está vazia
