const input = require('prompt-sync')()

const real = 5.38
const dolar = parseFloat(input('Insira o valor em dolar: '));
var conversao = 0;

conversao = (dolar * real);

console.log(`${dolar} dolares apos a conversao sera ${conversao} reais.`)