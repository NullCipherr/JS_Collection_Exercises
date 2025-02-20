// Exercicio 14 - Repetição (FOR)
//
// Tabuada de Multiplicações
//
// Crie uma função que exiba a tabuada de multiplicação de um número informado pelo usuário.

// Função para exibir a tabuada de multiplicação de um número informado pelo usuário
function exibirTabuada(num)
{
    console.log("========================================");
    console.log(`Tabuada de Multiplicação do número ${num}:`);
    console.log("========================================");
    for(let i = 1 ; i <= 10 ; i++)
    {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    console.log("========================================");
    console.log();
}

// Testes da função
exibirTabuada(5);
exibirTabuada(7);
exibirTabuada(9);