// Exercicio 9 - Funções
// 
// Gerador de Inimigos Aleatórios
//
// Crie uma função que gere um inimigo aleatório com as seguintes propriedades:
// - Nome
// - Vida
// - Ataque
// - Defesa
// - Velocidade

// A função deve retornar um objeto com essas propriedades, sendo que o nome é aleatório e as demais propriedades são números aleatórios.
function gerarInimigoAleatorio()
{
    const nomes = ["Goblin", "Orc", "Troll", "Esqueleto", "Zumbi", "Fantasma", "Dragão"]; // Lista de nomes

    return {
        nome: nomes[Math.floor(Math.random() * nomes.length)], // Nome aleatório
        vida: Math.floor(Math.random() * 100) + 50, // Vida entre 50 e 150
        ataque: Math.floor(Math.random() * 20) + 10, // Ataque entre 10 e 30
        defesa: Math.floor(Math.random() * 20) + 10, // Defesa entre 10 e 30
        velocidade: Math.floor(Math.random() * 10) + 1 // Velocidade entre 1 e 10
    };
}

// Testes da função
console.log(gerarInimigoAleatorio()); 
console.log(gerarInimigoAleatorio()); 
console.log(gerarInimigoAleatorio()); 