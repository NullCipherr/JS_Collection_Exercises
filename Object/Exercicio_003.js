// Exercicio 3 - Objetos
//
// Biblioteca de Livros - Acessando Propriedades de Objetos
//
// 

let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    paginas: 1000,
    editora: "Editora Abril",
    disponivel: true
};

// Função que empresta um livro e modifica a propriedade disponivel para false
function emprestarLivro(livro)
{
    // Verifica se o livro está disponível
    if(livro.disponivel)
    {
        livro.disponivel = false; // Modifica a propriedade disponivel para false
        console.log(`${livro.titulo} foi emprestado.`); // Exibe mensagem de empréstimo
    }
    else // Caso o livro não esteja disponível
    {
        console.log(`${livro.titulo} não está disponível no momento.`);
    }
}

// Testes
console.log("Antes:", livro);
emprestarLivro(livro);
console.log("Depois:", livro);