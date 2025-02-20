// Exercicio 14 - Funções
//
// Sistema de Colisão Simples
//
// Crie uma função chamada `isColliding` que receberá dois argumentos que são objetos representando dois retângulos 2D.
// Cada objeto terá as seguintes propriedades:
// - x: a posição do retângulo no eixo X
// - y: a posição do retângulo no eixo Y
// - width: a largura do retângulo
// - height: a altura do retângulo

// Função que recebe dois objetos e verifica se eles estão colidindo
// A função deve retornar true se os retângulos estiverem colidindo e false caso contrário
function isColliding(obj1, obj2)
{
    return obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y;
}

// Testes da função isColliding

// Criação de dois objetos: Player e Obstacle
const player = {x: 10, y: 10, width: 5, height: 5} ;
const obstacle = {x: 12, y: 12, width: 5, height: 5} ;

console.log(isColliding(player, obstacle)); // true
console.log(isColliding(player, {x: 20, y: 20, width: 5, height: 5})); // false
console.log(isColliding(player, {x: 5, y: 5, width: 5, height: 5})); // false
console.log(isColliding(player, {x: 5, y: 5, width: 10, height: 10})); // true