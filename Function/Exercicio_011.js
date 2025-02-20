// Exercicio 11 - Funções
//
// Sistema de Inventário
//
// Crie um sistema de inventário que permita adicionar itens, remover itens e listar itens.

const mochila = []; // Array para armazenar os itens.
const mochila_size = 10 ; // Limite do inventário.
 
// Função para adicionar itens
function addItem(inventario, item, limite)
{
    // Verifica se o inventário está cheio
    if(inventario.length < limite)
    {
        inventario.push(item); // Adiciona o item ao inventário 
        return `Item ${item} adicionado com sucesso!`; // Retorna a mensagem de sucesso
    }
    else
    {
        return `Inventário cheio!`; // Retorna a mensagem de erro
    }
}

// Função para remover itens
function removeItem(inventario, item)
{
    if(inventario.includes(item))
    {
        inventario.splice(inventario.indexOf(item), 1);
        return `Item ${item} removido com sucesso!`;
    }
    else
    {
        return `Item ${item} não encontrado!`;
    }
}

// Função para listar itens
function listItem(inventario)
{
    console.log("Listando todos os itens") ;
    for(let i = 0 ; i < inventario.length; i++)
    {
        console.log(inventario[i]) ;
    }
}

// Testes das funções
console.log(addItem(mochila, "Poção", mochila_size)) ;
console.log(listItem(mochila)) ;

console.log(removeItem(mochila, "Poção")) ;
console.log(listItem(mochila)) ;

console.log(addItem(mochila, "Poção", mochila_size)) ;
console.log(addItem(mochila, "Espada", mochila_size)) ;
console.log(addItem(mochila, "Escudo", mochila_size)) ;

console.log(listItem(mochila)) ;