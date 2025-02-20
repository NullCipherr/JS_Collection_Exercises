// Exercicio 12 - Funções
//
// Sistema de Drop's de Itens
//
// Crie uma função que simule um sistema de drop de itens de um jogo.

function dropItem()
{
    const drops = [
        {item: "Longsword", chance: 0.1},
        {item: "Steel Armor", chance: 0.2},
        {item: "Health Potion", chance: 0.3},
        {item: "Mana Potion", chance: 0.4},
        {item: "Gold Coin", chance: 0.5}
    ];

    const roll = Math.random(); // Gera um número aleatório entre 0 e 1
    let acumulado = 0 ;

    for(let i = 0 ; i < drops.length ; i++)
    {
        acumulado += drops[i].chance; // Acumula as chances de drop
 
        // Se o número aleatório for menor que o acumulado, o item é dropado
        if(roll < acumulado)
            return drops[i].item
    }
}

console.log(dropItem());
console.log(dropItem());
console.log(dropItem());