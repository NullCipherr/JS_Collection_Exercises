// Exercicio 1 - Laço de Repetição - While
//
// Crie uma função que exiba uma contagem regressiva de n até 0.

// Função que exibe uma contagem regressiva de n até 0.
function contagemRegressiva(num)
{
    console.log("Contagem Regressiva de " + num + " até 0:");
    while(num >= 0)
    {
        console.log(num);
        num--;
    }
}

// Chamada da função
contagemRegressiva(10);
contagemRegressiva(5);