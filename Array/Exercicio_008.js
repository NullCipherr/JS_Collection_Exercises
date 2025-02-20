// Exercicio 8
//
// Array de Objetos
//
// Crie um array de objetos, onde cada objeto tem titulo, autor e ano, como [{titulo: "O Hobbit", autor: "Tolkien", ano: 1937}, ...].
// Use o método forEach para imprimir o título de cada livro.
// Use o método find para localizar um livro pelo título (exemplo: "O Hobbit") e exiba o resultado.

// Array de Objetos de Livros
let livros = [
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        ano: 1937
    },
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        ano: 1997
    }
];

livros.forEach(livro => console.log(livro.titulo + " - " + livro.autor + " - " + livro.ano)); // Exibe os livros

let livroEncontrado = livros.find(livro => livro.titulo === "O Senhor dos Anéis"); // Encontra o livro
console.log("Livro Encontrado: ", livroEncontrado); // Exibe o livro encontrado