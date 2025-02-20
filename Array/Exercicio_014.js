// Exercicio 14 - Arrays
//
// Combinação de Itens
//
// Crie uma função combinarItens que verifica se dois itens estão no inventário, os remove e adiciona um novo item.
// Use um objeto de receitas para definir combinações (ex.: "Madeira" + "Pedra" = "Machado").
// Teste uma combinação.

let inventario = ["Madeira", "Pedra", "Machado"];

const receitas = {
    "Madeira+Pedra": "Machado",
    "Madeira+Madeira": "Bastão",
    "Pedra+Pedra": "Flecha"
};

// Função que combina dois itens do inventário e adiciona um novo item.
function combinarItens(inventario, item1, item2)
{
    const combinacao = `${item1}+${item2}`;
    const resultado = receitas[combinacao];

    // Verifica se a combinação existe e se os itens estão no inventário.
    if(resultado && inventario.includes(item1) && inventario.includes(item2))
    {
        inventario.splice(inventario.indexOf(item1), 1); // Remove o item1 do inventário.
        inventario.splice(inventario.indexOf(item2), 1); // Remove o item2 do inventário.
        inventario.push(resultado); // Adiciona o novo item ao inventário.
        console.log(`Combinou ${item1} e ${item2} para criar ${resultado}!`);
    }
    else if(!resultado) // Verifica se a combinação não existe.
    {
        console.log("Combinação não existe!");
    }
    else // Verifica se os itens não estão no inventário.
    {
        console.log("Itens não encontrados no inventário!");
    }

    // Retorna o inventário atualizado.
    return inventario ;
}

// Testa a combinação de itens.
console.log("Inventário inicial: ", inventario);
inventario = combinarItens(inventario, "Madeira", "Pedra");
console.log("Inventário final: ", inventario);
inventario = combinarItens(inventario, "Madeira", "Pedra");
console.log("Inventário final: ", inventario);