// Exercicio 8 - Repetição 
//
// Combate entre inimigos
//
// Crie um sistema de combate onde o jogador enfrenta inimigos. O jogador tem 100 de vida e cada inimigo causa 20 de dano. 
// O jogo termina quando a vida do jogador chegar a 0.

// Jogador
let playerLife = 100;
let baseDamagePlayer = 25;

// Inimigo
let oponnentLife = 100;
let baseDamageOponnent = 20 ;

// Função que simula um combate entre o jogador e um inimigo
function combatSystem()
{
    while(playerLife > 0 && oponnentLife > 0)
    {
        oponnentLife -= baseDamagePlayer;
        playerLife -= baseDamageOponnent;

        console.log(`Vida do jogador: ${playerLife}`);
        console.log(`Vida do inimigo: ${oponnentLife}`);
    }
    
    // Verifica o resultado do combate
    const resultado = playerLife > 0 ? "Você venceu o combate!" : "Você perdeu o combate!";

    console.log("Fim do combate!");
    console.log("------------------------------------------------------------------") ;
    console.log(resultado);
    console.log(` - Vida do jogador: ${playerLife}`);
    console.log(` - Vida do inimigo: ${oponnentLife}`);
    console.log("------------------------------------------------------------------") ;
    
}

// Teste da função
combatSystem();