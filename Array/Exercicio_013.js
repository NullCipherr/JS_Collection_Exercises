// Exercicio 13 
//
// Sistema de Ataque
//
// Crie uma função atacarInimigo que reduz a vida de um inimigo específico em um array.
// Crie uma função removerMortos que filtra inimigos com vida <= 0.
// Teste atacando inimigos e removendo os mortos.

// Array de inimigos
let inimigos = [{nome: 'Goblin', vida: 100}, {nome: 'Orc', vida: 200}, {nome: 'Troll', vida: 300}]

// Função que reduz a vida de um inimigo específico em um array
function atacarInimigo(inimigos, nomeInimigo, dano)
{
    const index = inimigos.indexOf(inimigos.find(inimigo => inimigo.nome === nomeInimigo)) ; // Procura o inimigo no array

    // Se o inimigo foi encontrado
    if(index !== -1)
    {
        inimigos[index].vida -= dano ; // Reduz a vida do inimigo
        console.log(`${inimigos[index].nome} recebeu ${dano} de dano. Vida restante: ${inimigos[index].vida}`); // Exibe a vida restante
    }

    return inimigos ; // Retorna o array de inimigos
}

// Função que filtra inimigos com vida <= 0
function removerMortos(inimigos)
{
    return inimigos.filter(inimigo => inimigo.vida > 0) ;
}

// Testes
inimigos = atacarInimigo(inimigos, 'Goblin', 50) ;
inimigos = atacarInimigo(inimigos, 'Orc', 200) ;
inimigos = atacarInimigo(inimigos, 'Troll', 300) ;

console.log("Inimigos após o ataque: ", inimigos) ;
inimigos = removerMortos(inimigos) ;
console.log("Inimigos Vivos: ", inimigos) ;