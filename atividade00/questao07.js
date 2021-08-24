var input = require('prompt-sync')()
var elem = parseInt(input('Insira um valor: '));
var vetor = [elem];
var tamanho = vetor.length

while (vetor.length != 5) {
    var elem = parseInt(input('Insira outro valor: '));
    vetor.push(elem);
}

console.log(vetor);