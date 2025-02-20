// Exercicio 6 - Objetos
//
// Loja Virtual - Objetos e Arrays
//
// Crie um objeto loja com uma propriedade produtos (array de objetos com nome e preco).
// Adicione um método adicionarAoCarrinho que move um produto para um array carrinho.
// Teste adicionando produtos ao carrinho.

let loja = {
    produtos: [
        {nome: 'Camiseta', preco: 29.90},
        {nome: 'Calça', preco: 129.90},
        {nome: 'Tênis', preco: 249.90}
    ],
    carrinho: [],
    adicionarAoCarrinho: function(produto) {
        const index = this.produtos.indexOf(produto);
        if (index > -1) {
            this.carrinho.push(this.produtos[index]);
            console.log(`${produto.nome} adicionado ao carrinho!`);
        }
    },

    valorCarinho: function() {
        return this.carrinho.reduce((total, produto) => total + produto.preco, 0);
    }
};

loja.adicionarAoCarrinho(loja.produtos[0]);
loja.adicionarAoCarrinho(loja.produtos[1]);
loja.adicionarAoCarrinho(loja.produtos[2]);

console.log("Carrinho", loja.carrinho);
console.log("Valor total do carrinho", loja.valorCarinho());