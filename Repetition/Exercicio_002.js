// Exercicio 2 - Laço de Repetição - While
// 
// Crie uma função que soma todos os número de 1 até n.

// Função que soma todos os números de 1 até n.
function somaNumeros(n)
{
    var soma = 0 ;
    var i = 1 ;

    while(i <= n)
    {
        soma += i ;
        i++ ;
    }

    return soma ;
}

// Teste da função
console.log("Soma de 1 até 10: " + somaNumeros(10));
console.log("Soma de 1 até 5: " + somaNumeros(5));
console.log("Soma de 1 até 100: " + somaNumeros(100));
console.log("Soma de 1 até 1000: " + somaNumeros(1000));