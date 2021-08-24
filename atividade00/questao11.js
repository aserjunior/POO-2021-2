const input = require(`prompt-sync`)();
var p = parseFloat(input('Insira um valor para porcentagem: '));
var x = parseFloat(input('Insira o valor do número: '));

function porcento (x, p) {
    resposta = (x * (p/100));
    return (`${p} % de ${x} é igual a >>> ${resposta}.`)
}

console.log(porcento(x, p))