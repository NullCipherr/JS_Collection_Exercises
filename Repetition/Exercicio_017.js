// Exercicio 17 - Repetição (FOR)
//
// Fatorial
// 
// Crie um programa que leia um número inteiro e calcule o fatorial desse número.

function fatorial(numero)
{
    let fatorial = 1 ;

    for(let i = 1 ; i <= numero ; i++)
    {
        fatorial *= i ;
    }

    console.log(`O fatorial de ${numero} é ${fatorial}`) ;
}

// Teste da função
fatorial(5) ; // 120
fatorial(6) ; // 720
fatorial(7) ; // 5040