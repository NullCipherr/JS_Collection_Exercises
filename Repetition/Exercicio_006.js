// Exercicio 6 - Repetição 
//
// Progressão de Níveis	✅
//
// Crie um sistema de progressão de níveis onde o jogador precisa acumular pontos de experiência (XP) para passar de nível. 
// O jogador ganha 100 XP por ação e avança de nível a cada 1000 XP.

// Variaveis Globais
let level = 1 ;
let level_max = 10 ;
let experience = 0 ; 

// Função de progressão de níveis
function progress_level()
{
    // Enquanto o level for menor que 10 - Level máximo
    while(level < level_max)
    {
        console.log(`Level: ${level} - XP: ${experience}`);
        
        experience += 100 ; // Adiciona 100 de experiência
        
        // Se a experiencia for maior ou igual a 1000 * level (Level 1 - 1000, Level 2 - 2000, Level 3 - 3000, ...)
        if (experience >= 1000 * level)
        {
            level += 1 ; // Avança de level
            experience = 0 ; // Reseta a experiencia
            console.log(`Parabéns!! Você alcançou o level ${level}`);
        }
    }
}

progress_level(); // Chama a função de progressão de níveis