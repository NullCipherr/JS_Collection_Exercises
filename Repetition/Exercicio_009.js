// Exercicio 9 - Repetição
//
// Fuga de Labirinto
//
// Simule um jogo onde o jogador tenta escapar de um labirinto. A cada iteração, o jogador dá um passo. 
// O jogo termina quando o jogador encontrar a saída (representada por um número aleatório).

// 
function escapeLabirinto()
{
    const saida = Math.floor(Math.random() * 20) + 1; // Gera um número aleatório entre 1 e 20
    let jogador = 0 ; // Posição inicial do jogador - 0 
    let passos = 0 ;

    while(jogador != saida)
    {
        passos++ ; // Incrementa o número de passos
        jogador += 1 ; // O jogador dá um passo

        if(passos === saida)
        {
            console.log(`Passo ${passos}: Encontrou a saída!`);
            break ;
        }
        else{
            console.log(`Passo ${passos}: Procurando a saída`);
        }
    }

    console.log(`Fim do jogo!`);
}

// Teste da função
escapeLabirinto();