// Exercicio 14 - Operador Ternário
//
// Crie uma função que verifica o status de um pedido com base no código. (OK, Bad Request, Not Found, Internal Server Error)
// Se o código for 200, retorne "OK"
// Se o código for 400, retorne "Bad Request"
// Se o código for 404, retorne "Not Found"
// Se o código for 500, retorne "Internal Server Error"
// Se o código não for nenhum desses, retorne "Erro Desconhecido"

// Função para verificar o status do pedido
function verificaStatusPedido(status)
{
    const resultado = status === 200 ? "OK" : status === 400 ? "Bad Request" : status === 404 ? "Not Found" : status === 500 ? "Internal Error Server" : "Erro Desconhecido";
    return resultado;
}

// Teste da função
console.log(verificaStatusPedido(200)); // OK
console.log(verificaStatusPedido(400)); // Bad Request
console.log(verificaStatusPedido(404)); // Not Found
console.log(verificaStatusPedido(500)); // Internal Server Error
console.log(verificaStatusPedido(600)); // Erro Desconhecido