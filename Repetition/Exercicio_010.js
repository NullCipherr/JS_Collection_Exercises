// Exercicio 1 - Repetição
//
// Batalha contra monstro
//
// Crie um sistema de batalha onde o jogador enfrenta um monstro. 
// O jogador e o monstro têm pontos de vida (HP) e causam dano um ao outro até que um deles seja derrotado.

// Variáveis Globais
monsterHP = 100;
playerHP = 100;

// Função que simula o dano que será causado.
function attack()
{
    var damage = Math.floor(Math.random() * 20) + 1 ; // Dano entre 1 e 20
    return damage ; // Retorna o dano causado
}

// Função que simula a batalha
function simulateBattle()
{
    while(monsterHP > 0 && playerHP > 0)
    {
        var playerDamage = attack();
        var monsterDamage = attack();

        monsterHP -= playerDamage; // O jogador ataca o monstro
        playerHP -= monsterDamage; // O monstro ataca o jogador

        console.log(`Jogador causou ${playerDamage} de dano ao monstro. HP do monstro: ${monsterHP}`);
        console.log(`Monstro causou ${monsterDamage} de dano ao jogador. HP do jogador: ${playerHP}`);
    }

    if(playerHP <= 0)
    {
        console.log("Você foi derrotado pelo monstro!");
    }
    else
    {
        console.log("Você derrotou o monstro!");
    }
}

// Teste da função
simulateBattle(); // Simula a batalha