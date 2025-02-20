// Exercicio 12 - Arrays
//
// Gerador de Inimigos
//
// Crie uma função gerarInimigo que retorna um objeto com nome (de uma lista) e vida (aleatória entre 50 e 100).
// Crie uma função criarHorda que adiciona N inimigos a um array.
// Gere uma horda de 4 inimigos e exiba o resultado.

// Lista de inimigos
const inimigos = ['Goblin', 'Orc', 'Troll', 'Esqueleto', 'Dragão', 'Bruxa', 'Lobo', 'Urso', 'Gigante', 'Fantasma', 'Zumbi', 'Vampiro', 'Cavaleiro', 'Mago', 'Arqueiro'] ;

// Função que gera um inimigo, retornando um objeto com nome e vida.
function gerarInimigo()
{
    const inimigo = inimigos[Math.floor(Math.random() * inimigos.length)]; // Gera um número aleatório entre 0 e o tamanho da lista de inimigos.
    const vida = Math.floor(Math.random() * 51) + 50; // Gera um número aleatório entre 50 e 100.
    return {nome: inimigo, vida: vida};
}

// Função que cria uma horda de inimigos.
function criarHorda(quantidade)
{
    let horda = [] ; // Cria um array vazio.

    // Adiciona a quantidade de inimigos.
    for(let i = 0 ; i < quantidade; i++)
    {
        horda.push(gerarInimigo()); // Adiciona um inimigo gerado no array.
    }

    return horda ;
}

// Testes
let horda = criarHorda(4) ; // Cria uma horda de 4 inimigos.
console.log("Horda Gerada: ", horda) ; // Exibe a horda de inimigos.