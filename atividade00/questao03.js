const input = require('prompt-sync')();

const valor1 = parseInt(input('Insira o valor do primeiro número: '))
const valor2 = parseInt(input('Insira o valor do segundo número: '))
const valor3 = parseInt(input('Insira o valor do terceiro número: '))

//checar

function checarMenor(valor1, valor2, valor3) {
    if (valor1 < valor2 && valor1 < valor3) {
        return(`O menor valor dos 3 escolhidos é ${valor1}`)
    }
    if (valor2 < valor3 && valor2 < valor1) {
        return(`O menor valor dos 3 escolhidos é ${valor2}`)
    }
    if (valor3 < valor1 && valor3 < valor2) {
        return(`O menor valor dos 3 escolhidos é ${valor3}`)
    }
    if (valor1 == valor2 && valor1 < valor3) {
        return(`O menor valor dos 3 escolhidos é ${valor1}`)
    }
    if (valor1 == valor3 && valor1 < valor2) {
        return(`O menor valor dos 3 escolhidos é ${valor1}`)
    }
    if (valor2 == valor3 && valor2 < valor1) {
        return(`O menor valor dos 3 escolhidos é ${valor2}`)
    }
    if (valor2 == valor1 && valor2 < valor3) {
        return(`O menor valor dos 3 escolhidos é ${valor2}`)
    }
    if (valor3 == valor1 && valor3 < valor2) {
        return(`O menor valor dos 3 escolhidos é ${valor3}`)
    }
    if (valor3 == valor2 && valor3 < valor1) {
        return(`O menor valor dos 3 escolhidos é ${valor3}`)
    }
    if (valor1 == valor2 && valor1 == valor3) {
        return(`Os 3 valores escolhidos são iguais!`)
    }
    }


//saida

console.log(`${checarMenor(valor1, valor2, valor3)}`)