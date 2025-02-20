// Exercicio 1 - Comparação de Números
// Crie uma função chamada compararNumeros que recebe dois números como parâmetros e retorna uma string indicando qual número é maior ou se são iguais.

function compararNumeros(num1, num2)
{
    if(num1 == num2)
    {
        return "Os números são iguais";
    }
    else if(num1 > num2)
    {
        return num1 + " é maior que " + num2 ;
    }
    else{
        return num2 + " é maior que " + num1 ; 
    }
}

// Teste da função
console.log(compararNumeros(5, 10)); // Deve imprimir "10 é maior que 5"
console.log(compararNumeros(7, 7)); // Deve imprimir "Os números são iguais"
console.log(compararNumeros(20, 15)); // Deve imprimir "20 é maior que 15"