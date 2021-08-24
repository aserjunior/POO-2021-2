const input = require('prompt-sync')()
const palavra = (input('Insira a sua string: '));
const a = input('Insira uma letra: ');
const b = input('Insira outra letra: ');
var array = palavra.split('');
var i = 0;
var x = 0;

while (i < palavra.length) {
    if (array[i] === a) {
        array[i] = b;
        i = i + 1;
    } else {
        i = i + 1;
    }
}

var novaString = ``;
while (x < palavra.length) {
    novaString += `${array[x]}`;
    x = x + 1;
}


console.log(`A primeira string escolhida foi ${palavra}, apos a troca dos caracteres "a" e "b" escolhidos, a nova string sera:\n\n${novaString}`);