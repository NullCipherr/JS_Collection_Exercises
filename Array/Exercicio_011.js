// Exercicio 11 - Arrays
//
// Ranking de Pontuações
//
// Crie uma função adicionarPontuacao que adiciona um objeto com nome e pontos a um array.
// Crie uma função ordenarRanking que ordena o array em ordem decrescente de pontos.
// Teste com 3 jogadores e exiba o ranking ordenado.


let ranking = [] ;

// Função que adiciona um objeto com nome e pontos a um array
function adicionarPontuacao(ranking, nome, pontos)
{
    ranking.push({nome: nome, pontos: pontos}) ;
    console.log("Jogador " + nome + " adicionado com sucesso!") ;
    return ranking ;
}

// Função que ordena o array em ordem decrescente de pontos
function ordenarRanking()
{
    return ranking.sort((a, b) => b.pontos - a.pontos) ; // Ordena o array em ordem decrescente de pontos
}

// Testes
ranking = adicionarPontuacao(ranking, "Jogador 1", 100) ;
ranking = adicionarPontuacao(ranking, "Jogador 2", 50) ;
ranking = adicionarPontuacao(ranking, "Jogador 3", 75) ;
ranking = adicionarPontuacao(ranking, "Jogador 4", 125) ;
ranking = adicionarPontuacao(ranking, "Jogador 5", 25) ;
ranking = adicionarPontuacao(ranking, "Jogador 6", 150) ;
console.log("Ranking: ", ranking) ;

// Ordena o ranking
ranking = ordenarRanking() ;
console.log("Ranking ordenado: ", ranking) ;