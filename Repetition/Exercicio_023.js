// Exercicio 23 - Repetição (FOR)
//
// Análise de Frequência de Palavras em uma sessão de Terapia
//
// Suponha que você tenha uma transcrição de uma sessão de terapia. Conte a frequência de palavras-chave como "ansiedade", "medo", "feliz", etc.

// Variáveis Globais
const transcricao = "O paciente relatou sentir muita ansiedade e medo. Ele também mencionou momentos felizes, mas a ansiedade parece predominar." ;
const palavrasChave = ["ansiedade", "medo", "feliz"] ;
let contagem = {} ; // Objeto para armazenar a contagem de palavras-chave

function contarPalavrasChave()
{
    for (let i = 0; i < palavrasChave.length; i++) 
    {
        const palavra = palavrasChave[i];
        const regex = new RegExp(palavra, "gi");
        const matches = transcricao.match(regex);
        contagem[palavra] = matches ? matches.length : 0;
    }

    console.log("Frequência de palavras-chave:");
    for (const palavra in contagem) 
    {
        console.log(`${palavra}: ${contagem[palavra]}`);
    }
}

contarPalavrasChave();