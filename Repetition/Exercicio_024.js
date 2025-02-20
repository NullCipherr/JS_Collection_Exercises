// Exercicio 24 - Repetição (FOR)
//
// Simulação de Experimento de Memória
//
// Crie um programa que simule um experimento de memória. O programa exibe uma lista de palavras, e o usuário deve tentar lembrar o máximo possível. 
// Depois, o programa verifica quantas palavras o usuário acertou.

const palavras = ["cachorro", "gato", "pássaro", "peixe", "tartaruga", "cobra", "rato", "elefante", "leão", "tigre"];
const palavrasMemorizadas = ["cachorro", "gato", "peixe", "cobra", "rato", "tigre"];

// Função que exibe a lista de palavras e verifica quantas palavras o usuário acertou
function experimentoMemoria()
{
    let acertos = 0;

    console.log("Memorize as palavras:");
    for (let i = 0; i < palavras.length; i++) 
    {
        console.log(palavras[i]);
    }

    for(let i = 0 ; i < palavras.length; i++ )
    {
        if (palavrasMemorizadas.includes(palavras[i]))
        {
            acertos++;
        }
    }

    console.log(`Você acertou ${acertos} de ${palavras.length} palavras.`);
}

// Teste da função
experimentoMemoria();