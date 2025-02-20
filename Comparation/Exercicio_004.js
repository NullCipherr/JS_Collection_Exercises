// Exercicio 4 - Comparação de Strings
//
// Crie uma função chamada compararStrings que recebe duas strings e retorna:
// 1 se a primeira string for maior que a segunda.
// -1 se a primeira string for menor que a segunda.
// 0 se as strings forem iguais.

function compararStrings(string1, string2) 
{
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    if (string1 > string2)
    {
        return 1;
    }
    else if (string1 < string2)
    {
        return -1;
    }
    else
    {
        return 0;
    }
}

// Teste da função 
console.log(compararStrings("abc", "def")); // Deve imprimir -1
console.log(compararStrings("hello", "hello")); // Deve imprimir 0
console.log(compararStrings("zebra", "Apple")); // Deve imprimir 1