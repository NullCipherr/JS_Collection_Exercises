// Exercicio 21 - Reptição (FOR)
//
// Simulação de Teste de Personalidade
//
// Crie um teste de personalidade simplificado baseado no modelo Big Five (Abertura, Conscienciosidade, Extroversão, Amabilidade, Neuroticismo). 
// O teste tem 5 perguntas, e cada resposta varia de 1 a 5. Calcule a pontuação em cada traço.

// Respostas das pessoas, contendo 5 respostas cada
const respostas = [
    [1, 2, 3, 4, 5], // Resposta da primeira pessoa
    [5, 4, 3, 2, 1], // Resposta da segunda pessoa
    [1, 2, 3, 4, 5], // Resposta da terceira pessoa
    [5, 4, 3, 2, 1], // Resposta da quarta pessoa
    [1, 2, 3, 4, 5] // Resposta da quinta pessoa
] ;

// Função que simula o teste de personalidade
function testePersonalidade()
{
    for(let i = 0; i < respostas.length; i++)
    {
        let abertura = 0;
        let conscienciosidade = 0;
        let extroversao = 0;
        let amabilidade = 0;
        let neuroticismo = 0;

        const pessoa = respostas[i] ; // Pega as respostas da pessoa i

        // Calcula a pontuação de cada traço
        for(let j = 0 ; j < pessoa.length; j++)
        {
            switch(j)
            {
                case 0:
                    abertura += pessoa[j];
                    break;
                case 1:
                    conscienciosidade += pessoa[j];
                    break;
                case 2:
                    extroversao += pessoa[j];
                    break;
                case 3:
                    amabilidade += pessoa[j];
                    break;
                case 4:
                    neuroticismo += pessoa[j];
                    break;
            }
        }

        console.log(`Pessoa ${i+1}:`);
        console.log(`Abertura: ${abertura}`);
        console.log(`Conscienciosidade: ${conscienciosidade}`);
        console.log(`Extroversão: ${extroversao}`);
        console.log(`Amabilidade: ${amabilidade}`);
        console.log(`Neuroticismo: ${neuroticismo}`);
        console.log();
    }
}

testePersonalidade();