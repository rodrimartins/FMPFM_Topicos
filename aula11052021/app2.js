// incluindo o módulo

var calculadora = require("./calculadora");

console.log(calculadora.soma(10,10));
console.log(calculadora.mult(10,5));
console.log(calculadora.sub(50,10));
console.log(calculadora.div(30,3));

calculadora.nome =  "Aula de Tópicos Avançados em Computação I";
console.log(calculadora.nome);

