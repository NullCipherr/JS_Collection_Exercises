// Exercicio 10 - Operador Ternário
//
// Crie uma função que verifica o tipo de triângulo que é passado como parâmetro.
// A função deve retornar uma string com a resposta.

// Função que verifica o tipo de triângulo
function verificaTriangulo(lado1, lado2, lado3) 
{
    const resultado = lado1 === lado2 && lado2 === lado3 ? 'Equilátero' : lado1 === lado2 || lado2 === lado3 || lado1 === lado3 ? 'Isósceles' : 'Escaleno' ;
    return resultado ;
}

// Teste da função
console.log(verificaTriangulo(2, 2, 2)); // Equilátero
console.log(verificaTriangulo(2, 2, 3)); // Isósceles
console.log(verificaTriangulo(2, 3, 4)); // Escaleno
console.log(verificaTriangulo(3, 4, 5)); // Escaleno
console.log(verificaTriangulo(4, 4, 4)); // Equilátero
console.log(verificaTriangulo(4, 4, 5)); // Isósceles
console.log(verificaTriangulo(4, 5, 6)); // Escaleno