/*  Exercício 1: Calculadora Simples
    Crie uma função chamada calculadora que recebe três parâmetros: dois números e uma operação (como uma string: "soma", "subtracao", "multiplicacao", "divisao"). 
    A função deve realizar a operação especificada e retornar o resultado. 
*/

function calculadora(num1 , num2, operador)
{
    if(operador == "soma")
    {
        return num1 + num2 ;
    }
    else if(operador == "subtracao")
    {
        return num1 - num2 ;
    }
    else if(operador == "multiplicacao")
    {
        return num1 * num2 ;
    }
    else if(operador == "divisao")
    {
        return num1 / num2 ;
    }
    else
    {
        console.log("Operador inválido!") ;
    }
}

console.log("=== Calculadora Simples JS ===") ;

// Testes da função calculadora
console.log("Soma > " + calculadora(10, 5, "soma")) ; // 15
console.log("Subtração > " + calculadora(10, 5, "subtracao")) ; // 5
console.log("Multiplicação > " + calculadora(10, 5, "multiplicacao")) ; // 50
console.log("Divisão > " + calculadora(10, 5, "divisao")) ; // 2

console.log("==============================") ;

