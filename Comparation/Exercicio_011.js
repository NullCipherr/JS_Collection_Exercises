// Exercicio 11 - Operador Ternário
//
// Crie uma função que classifica uma nota em conceitos de A a F.

// Função que classifica a nota
function classificaNota(nota)
{
    const resultado = nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : nota >= 60 ? "D" : nota >= 50 ? "E" : "F" ; 
    return resultado ;
}

// Teste da função
console.log(classificaNota(100)); // A
console.log(classificaNota(90)); // A
console.log(classificaNota(80)); // B
console.log(classificaNota(70)); // C
console.log(classificaNota(60)); // D
console.log(classificaNota(50)); // E
console.log(classificaNota(40)); // F