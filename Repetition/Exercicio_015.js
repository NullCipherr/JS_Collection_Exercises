// Exercicio 14 - Repetição (FOR)
//
// Soma de Número Pares
// 
// Crie uma função que exiba a soma dos números pares de 1 até n.

// Função para exibir a soma dos números pares de 1 até n
function exibirPar(num)
{
    let soma = 0 ;
    for(let i = 1; i <= num; i++)
    {
        if(i % 2 === 0)
        {
            soma += i ;
        }
    }
    console.log(`A soma dos números pares de 1 até ${num} é: ${soma}`);
    console.log();
}

// Testes da função
exibirPar(5);
exibirPar(7);
exibirPar(9);
exibirPar(10);
exibirPar(15);