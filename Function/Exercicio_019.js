// Exercicio 19 - Arrow Function
//
// Calcular a distância entre dois pontos
//
// Crie uma arrow function chamada calcularDistancia que recebe as coordenadas (x1, y1) e (x2, y2) de dois pontos e retorna a distância entre eles usando a fórmula da distância euclidiana.
// A fórmula da distância euclidiana é : raiz quadrada de (x2 - x1)² + (y2 - y1)²

// Função para calcular a distância entre dois pontos
const calcularDistancia = (x1, y1, x2, y2) => 
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Testes da função
console.log(calcularDistancia(0, 0, 3, 4)); // 5
console.log(calcularDistancia(1, 1, 2, 2)); // 1.4142135623730951
console.log(calcularDistancia(1, 1, 3, 1)); // 2