// Questão 01
let ar : number[] = [1, 90, 33, 28, 18, 11, 3, 13];
var contador = 0;
var soma = 0;

while (contador < ar.length){
    var valor = ar[contador];
    soma += valor;
    contador ++;
}

console.log(soma);

// Questão 02

/*let a : number[] = [1,2,3,4,5];
for (let i : number = 0; i <= a.length; i++) {
    console.log(a[i]);
}


Nesse código, o for vai percorrer o array "a" e vai realizar
um console log para cada item do array de acordo com o valor de i
que será implementado a cada console log mas, devido ao sinal de <=
sera imprimido um undefined pois não existe elemento na posição 5.
*/

// Questão 03

let array : number[] = [10, 50, 20, 22, 18, 33, 30, 77, 27, 999];

console.log(array.sort());
console.log(array.sort().reverse());

// Questão 04

let str : string = 'Instituto Federal do Piaui';
console.log(str.toUpperCase());
console.log(str.charAt(10));
console.log(str.lastIndexOf('o'));
let nova_str : string[] = str.split(' ');
console.log(nova_str);

