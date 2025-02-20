// Exercicio 4 - Objetos
//
// Playlist Musical - Objetos Aninhados
//
// Crie um objeto playlist com nome e uma propriedade musicas (array de objetos).
// Cada música deve ter titulo e artista.
// Exiba todas as músicas da playlist.

let playlist = {
    nome: "Rock",
    musicas: [
        {
            titulo: "Sweet Child O' Mine",
            artista: "Guns N' Roses",
        },
        {
            titulo: "Bohemian Rhapsody",
            artista: "Queen"
        },
        {
            titulo: "Stairway to Heaven",
            artista: "Led Zeppelin"
        }
]};

console.log(`Playlist: ${playlist.nome}`);
playlist.musicas.forEach(musica => { console.log(`Título: ${musica.titulo} - Artista: ${musica.artista}`) });