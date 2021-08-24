const input = require('prompt-sync')()
const palavra = (input('Insira a sua string: '));
var array = palavra.split('');
var i = 0;
var x = 0;

while (i < palavra.length) {
    if (array[i] === 'a' || array[i] === "e" ||  array[i] === "i" ||  array[i] === "o" ||  array[i] === "u") {
        array[i] = "";
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

console.log(`Apos retirar todas as vogais do texto inserido, o novo texto sera:\n\n${novaString}`);