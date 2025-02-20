// Exercicio 5 - Repetição	
//
// Crie um jogo simples onde o usuário precisa adivinhar um número aleatório entre 1 e 10. 
// Use um loop while para continuar pedindo ao usuário que insira um número até que ele acerte.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Função para adivinhar um número
async function guessNumber()
{
    console.log("Olá, vamos jogar um jogo! Tente adivinhar um número entre 1 e 10.");
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0 ;
    let guess = false ;

    while(!guess)
    {
        let userNumber = parseInt(await askQuestion("Digite um número entre 1 e 10: "));
            
        if (userNumber === secretNumber)
        {
            tentativas++;
            console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
            guess = true;
        }
        else if(userNumber < secretNumber)
        {
            tentativas++;
            console.log("Tente um número maior.");
        }
        else if(userNumber > secretNumber)
        {
            tentativas++;
            console.log("Tente um número menor.");
        }
    }

}

// Chama a função para adivinhar um número
guessNumber();