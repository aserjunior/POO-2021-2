var input = require('prompt-sync')()
var elem = parseInt(input('Insira um valor: '));
var vetor = [elem];
var tamanho = vetor.length;
var pares = 0;

while (vetor.length != 20) {
    var elem = parseInt(input('Insira outro valor: '));
    vetor.push(elem);
}

for (i = 0; i <= 20; i++) {
    if (vetor[i] % 2 == 0) {
        pares += 1
    }

}


console.log(vetor);
console.log(pares);