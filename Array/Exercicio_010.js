// Exercicio 10 - Arrays
//
// Inventário do Jogador
//
// Crie uma função adicionarItem que adiciona um item ao inventário (array).
// Crie uma função removerItem que remove um item específico pelo nome.
// Teste adicionando e removendo itens como "Espada", "Poção" e "Escudo".

// Variáveis Globais
let inventario = [];

// Função que adiciona um item ao inventário
function adicionarItem(inventario, item)
{
    inventario.push(item) ;
    console.log(`${item} adicionado ao inventário!`) ;
    return inventario ;
}

// Função que remove um item do inventário
function removerItem(inventario, item)
{
    const index = inventario.indexOf(item) ; // Procura o item no inventário
    
    // Se o item foi encontrado
    if(index !== -1)
    {
        inventario.splice(index, 1) ; // Remove o item do inventário
        console.log(`${item} removido do inventário!`) ;
    }
    else{
        console.log(`${item} não encontrado no inventário!`) ;
    }

    return inventario ;
}

// Adicionando itens ao inventário
inventario = adicionarItem(inventario, "Espada") ;
inventario = adicionarItem(inventario, "Poção") ;
inventario = adicionarItem(inventario, "Escudo") ;

console.log("Inventário Atual: ", inventario) ;

// Removendo itens do inventário
inventario = removerItem(inventario, "Poção") ; // Removendo item que existe
inventario = removerItem(inventario, "Poção") ;  // Removendo item que não existe

console.log("Inventário Atualizado: ", inventario) ;