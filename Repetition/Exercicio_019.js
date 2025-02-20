// Exercicio 19 - Repetição (FOR)
//
// Sequencia de Fibonacci
//
// Crie um programa que exiba os 10 primeiros números da sequência de Fibonacci.

function exibirFibonnaci(numero)
{
    let a = 0 ;
    let b = 1 ;

    for(let i = 0 ; i < numero; i++)
    {
        console.log(a);
        const temp = a + b ;
        a = b ;
        b = temp ;
    }
    console.log("")
}

exibirFibonnaci(10);
exibirFibonnaci(20);
exibirFibonnaci(30);