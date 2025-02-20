// Exercicio 2 - Verificação de Igualdade Estrita
// Crie uma função chamada verificarIgualdade que recebe dois valores e verifica se eles são estritamente iguais (tipo e valor). A função deve retornar true se forem iguais e false caso contrário.

// Função para verificar se dois valores são iguais - tipo e valor
function verificarIgualdade(valor1, valor2)
{
    // Faz uso de === para verificar se os valores são iguais (Comparação estrita)
    if(valor1 === valor2) 
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

// Teste da função 
console.log(verificarIgualdade(5, 5)); // Deve imprimir true
console.log(verificarIgualdade(5, "5")); // Deve imprimir false
console.log(verificarIgualdade("Olá", "Olá")); // Deve imprimir true

// Observação:
// ✅ Use === (comparação estrita) sempre que possível para evitar problemas com conversões implícitas inesperadas.
// 🚨 Cuidado ao usar ==, pois pode causar bugs difíceis de detectar por conta das conversões automáticas.