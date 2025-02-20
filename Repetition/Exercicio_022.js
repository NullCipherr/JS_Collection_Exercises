// Exercicio 22 - Repetição (FOR)
// 
// Simulação de Terapia Cognitivo-Comportamental (TCC)
//
// Crie um programa que simule uma sessão de Terapia Cognitivo-Comportamental (TCC). 
// O programa deve identificar pensamentos automáticos negativos e substituí-los por pensamentos racionais.

const pensamentosNegativos = [
    "Eu nunca faço nada direito." ,
    "Todo mundo me odeia.",
    "Eu sou um fracasso completo."
];

const pensamentosPositivos = [
    "Eu cometo erros, mas também tenho muitos acertos.",
    "Algumas pessoas podem não gostar de mim, mas outras me apreciam.",
    "Eu tenho falhas, mas também tenho muitas qualidades."
];

// Função que substitui pensamentos negativos por pensamentos positivos
function substituirPensamentos()
{
    for(let i = 0 ; i < pensamentosNegativos.length; i++)
    {
        console.log("--------------------------------------------------------------------------------------------------");
        console.log(`Pensamento negativo: ${pensamentosNegativos[i]}`);
        console.log(`Pensamento positivo: ${pensamentosPositivos[i]}`);
        console.log("--------------------------------------------------------------------------------------------------");
    }
}

// Teste da Função
substituirPensamentos();