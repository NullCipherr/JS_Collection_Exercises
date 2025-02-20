// Exercicio 13 - Repetição
//
// Exploração de Dungeon com encontros Aleatórios
//
// Crie um sistema de exploração de dungeon onde o jogador encontra inimigos ou tesouros aleatoriamente a cada passo.

// Variáveis Globais
// Player
let playerHP = 100 ; // HP do jogador
let passos = 0 ; // Passos dados na dungeon

// Dungeon
let dungeonSize = 10 ; // Tamanho da dungeon
let tesouros_coletados = 0 ; // Tesouros coletados na dungeon
let inimigos_derrotados = 0 ; // Inimigos derrotados na dungeon

function exploreDungeon()
{
    while(playerHP > 0 && passos < dungeonSize)
    {
        passos++ ;
        console.log(`Passo ${passos}: Explorando a Dungeon...`) ;

        const encontro = Math.floor(Math.random() * 3) ; // // 0: Inimigo, 1: Tesouro, 2: Nada

        // Inimigo
        if(encontro === 0 )
        {
            const damageEnemy = Math.floor(Math.random() * 10) + 1 ; // Dano do inimigo de 1 a 10
            playerHP -= damageEnemy ; // Dano do inimigo
            console.log(`Inimigo encontrado! Dano recebido: ${damageEnemy} | HP: ${playerHP}`) ;
            inimigos_derrotados++ ;
            console.log("Inimigo encontrado!") ;
        }
        if(encontro === 1)
        {
            tesouros_coletados++ ;
            console.log("Tesouro encontrado!") ;
        }
        else{
            console.log("Nada encontrado!") ;
        }
    }

    // Verifica se o jogador morreu ou completou a dungeon
    if(playerHP > 0)
    {
        console.log("Exploração da Dungeon Concluída!") ;
        console.log(`Tesouros coletados: ${tesouros_coletados} | Inimigos derrotados: ${inimigos_derrotados}`) ;
    }
    else
    {
        console.log("Você foi derrotado na Dungeon!") ;
    }
}

// Teste da função
exploreDungeon() ;