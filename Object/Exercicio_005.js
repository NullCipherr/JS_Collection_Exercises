// Exercicio 5 - Objetos
//
// Personagem RPG - Métodos Iterativos
//
// Crie um objeto personagem com nome, vida e ataque.
// Adicione métodos atacar (reduz vida de outro personagem) e curar (aumenta a própria vida).
// Teste as interações entre dois personagens.

const personagem = {
    nome: "Margarida",
    classe: "feiticeira",
    nivel: 1,
    vida: 100,
    ataque: 10,
    magia: 20,
    defesa: 5,
    xp: 0,
    
    // Métodos - Atacar e Curar
    atacar: function(alvo)
    {
        alvo.vida -= this.ataque; // Reduz a vida do alvo
        console.log(`${this.nome} atacou ${alvo.nome}! Vida de ${alvo.nome}: ${alvo.vida}`);
    },
    curar: function()
    {
        // Verifica se a vida está abaixo de 100
        if(this.vida < 100) 
        {
            this.vida += 15; // Recupera 15 de vida
            console.log(`${this.nome} se curou! Vida atual: ${this.vida}`);
        }
        else{
            console.log(`${this.nome} já está com a vida cheia!`);
        }
    }
};

// Inimigo
const inimigo = { nome: "Orc", vida: 50, ataque: 15, defesa: 10 };

// Teste das interações
personagem.atacar(inimigo);
personagem.curar();