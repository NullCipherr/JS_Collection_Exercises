// Exercicio 18 - Repetição (FOR)
//
// Inversão de String
//
// Crie uma função que receba uma string e retorne a mesma string invertida.

function inverterString(string)
{
    let textoInvertido = "" ;

    for(let i = string.length - 1 ; i >= 0 ; i--)
    {
        textoInvertido += string[i] ;
    }

    console.log(`Texto invertido: ${textoInvertido}`); // Saída: tpircSavaJ
}

// Teste da função
inverterString("Olá Mundo") ; // odnuM álO
inverterString("JavaScript") ; // tpircSavaJ
inverterString("Programação") ; // oãçamargorP