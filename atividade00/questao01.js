const input = require('prompt-sync')()

//entrada
const numero = parseInt(input('Numero inteiro: '))
var antes;
var depois;

//processamento
antes = (numero) - 1

depois = (numero) + 1

//saida
console.log(`Valor escolhido ${numero}\n Antecessor ${antes}\n Sucessor ${depois}`)