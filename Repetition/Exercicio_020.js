// Exercicio 20 - Repetição (FOR)
//
// Análise de Dados de Questionário de Ansiedade
//
// Suponha que você tenha os resultados de um questionário de ansiedade aplicado a 10 pessoas. 
// Cada resposta varia de 0 a 3, onde 0 = "Nunca", 1 = "Às vezes", 2 = "Frequentemente", e 3 = "Sempre". 
// Calcule a média de ansiedade do grupo.

const respostas = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1] ; // Respostas de 10 pessoas
let soma = 0 ; // Inicializa a variável soma

// Função que calcula a média de ansiedade do grupo
function mediaAnsiedade(respostas)
{
    // Percorre o array de respostas
    for(let i = 0 ; i < respostas.length ; i++)
    {
        soma += respostas[i] ; // Soma as respostas
    }
    
    const media = soma / respostas.length ; // Calcula a média
    return media ; // Retorna a média
}

console.log("A média de ansiedade do grupo é: " + mediaAnsiedade(respostas)) ; // Exibe a média de ansiedade do grupo