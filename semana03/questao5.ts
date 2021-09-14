function exibir(...letras: string[]){
    let soma : string = "";
    for (let letra of letras) {
        soma += letra;
    }

    return soma;
}
    
console.log(exibir("a","b"));
console.log(exibir("a","b","c"));
console.log(exibir("a","b","c","d"));