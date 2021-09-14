function soma(x: number, y?: any) :number {
    return x + y
}

console.log(soma(1))

/* Essa alternativa compila
mas o console.log apresenta
NaN */