var input = require('prompt-sync')();
var n1 = parseInt(input("Insira o primeiro numero: "))
var i = 0;
var n2 = [n1];



while (n1 != -1) {

    i += 1;
    n1 = parseInt(input("Insira outro numero: "))
    n2.push(n1);
    if (n1 == -1) {
        n2.pop(n1);
    }
}
const soma = n2.reduce((prevVal, elem) => prevVal + elem, 0)
console.log(`A soma dos numeros escolhidos e ${soma} e a media aritmetica e ${soma / i}`);