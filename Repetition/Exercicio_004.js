// Exercicio 4 - Repetição
//
// Crie uma função que calcula o fatorial de um número inteiro.
// O fatorial de um número n é n * (n-1) * (n-2) * ... * 1.
// O fatorial de 0 é 1.

// Função que calcula o fatorial de um número inteiro
function calculaFatorial(num)
{
    let fatorial = 1 ;
    let i = 1 ;
    
    while(i <= num)
    {
        fatorial *= i ;
        i++ ;
    }

    return fatorial ;
}

// Teste da função
console.log(calculaFatorial(5)); // 120
console.log(calculaFatorial(0)); // 1
console.log(calculaFatorial(1)); // 1
console.log(calculaFatorial(10)); // 3628800