// Exercicio 15 - Arrays
//
// Histórico de Missões
//
// Crie uma função registrarMissao que adiciona uma missão (objeto com nome e dificuldade) a um array.
// Crie uma função filtrarMissoesDificeis que retorna missões com dificuldade >= 5.
// Teste registrando e filtrando missões.

// Inicializando o array de missoes como vazio.
let missoes = [] ; 

// Função que registra uma missão no array de missoes.
function registrarMissao(missoes, nome, dificuldade)
{
    missoes.push({nome: nome, dificuldade: dificuldade}); // Adicionando a missão ao array de missoes, contendo o nome e a dificuldade.
    return missoes; // Retornando o array de missoes.
}

// Função que filtra as missões com dificuldade maior ou igual a 5.
function filtrarMissoesDificeis(missoes)
{
    return missoes.filter(missao => missao.dificuldade >= 5);
}

// Registrando missões.
console.log(registrarMissao(missoes, "Missao 1", 3));
console.log(registrarMissao(missoes, "Missao 2", 5));
console.log(registrarMissao(missoes, "Missao 3", 7));

console.log("");

console.log("Missões registradas: ", missoes);

// Filtrando missões dificeis.
console.log("Missões dificeis: ", filtrarMissoesDificeis(missoes));
