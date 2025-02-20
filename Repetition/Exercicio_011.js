// Exercicio 11 - Repetição
//
// Progressão de personagem com Atributos
//
// Crie um sistema de progressão onde o jogador ganha pontos de experiência (XP) e pode distribuir pontos em atributos (força, agilidade, inteligência) a cada nível.


// Variáveis Globais
let level = 1 ; // Nível do jogador
const levelMax = 10 ; // Nível máximo do jogador
let experience = 0 ; // Experiência do jogador

// Atributtes
let strength = 5 ; // Força Base
let agility = 2 ; // Agilidade Base
let intelligence = 2 ; // Inteligência Base
let points = 0 ; // Pontos para distribuir

// Função que distribui os pontos
function distributePoints()
{
    // Enquanto houver pontos para distribuir
    while(points > 0)
    {
        let attribute = Math.floor(Math.random() * 3) ; // Escolhe um atributo aleatório
        
        // Distribui 1 ponto no atributo escolhido aleatoriamente.
        switch(attribute)
        {
            case 0: // Força
                points-- ;
                strength++ ;
                console.log(`Você distribuiu 1 ponto em Força. Força: ${strength}`);
                break;
            case 1: // Agilidade
                points-- ;
                agility++ ;
                console.log(`Você distribuiu 1 ponto em Agilidade. Agilidade: ${agility}`);
                break;
            case 2: // Inteligência
                points-- ;
                intelligence++ ;
                console.log(`Você distribuiu 1 ponto em Inteligência. Inteligência: ${intelligence}`);
                break;
        }
    }
}


// Função de progressão de nível
function progressLevel()
{
    while(level < levelMax)
    {
        experience += 100 ; // Ganha 100 de experiência
        console.log(`Você ganhou 100 de experiência. XP: ${experience}`);
        
        if(experience >= 100 * level)
        {
            console.log(`Você subiu para o nível ${level + 1}`);
            level++ ; // Sobe de nível
            experience = 0 ; // Zera a experiência
            points += 5 ; // Ganha 5 pontos para distribuir
            console.log(`Você tem ${points} pontos para distribuir.`);
            distributePoints();
        }
    }
    console.log("===============================================");
    console.log("Você atingiu o nível máximo!");
    console.log(`Força: ${strength}`);
    console.log(`Agilidade: ${agility}`);
    console.log(`Inteligência: ${intelligence}`);
    console.log("===============================================");
}

// Teste da função
progressLevel(); // Simula a progressão de nível
