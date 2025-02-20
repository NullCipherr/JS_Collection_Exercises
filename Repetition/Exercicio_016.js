// Exercicio 16 - Repetição (FOR)
//
// Desenho de Triângulo com Asteriscos
// 
// Crie uma função que exiba um triângulo com asteriscos. 
// O tamanho do triângulo será informado pelo usuário.

// Função para exibir um triângulo com asteriscos
function desenharTriangulo(height)
{
    for(let i = 1 ; i <= height; i++)
    {
        console.log("*".repeat(i)) ;
    }
}

// Testes da função
desenharTriangulo(3);
desenharTriangulo(6);
desenharTriangulo(10);
