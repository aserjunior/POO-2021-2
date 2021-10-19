//Questão 01
/*
Podemos afirmar que ocorrera um erro na incialização mas,
não é pelo fato da variável não ter sido incializada previamente e
sim, devido a falta do this. no momento em que ele se refere a atributos
ou métodos dentro da própria classe.
*/

//Questão 02

class Hotel {
    quantReservas : number;
    
    constructor(quantReservas: number) {
        this.quantReservas = quantReservas;
    }

    adicionarReserva() : void {
            this.quantReservas++;
        }
    }

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);

//Questão 03
/*
O erro de compilação nesse caso é devido ao constructor pois,
ao utilizar ele é necessario passar um parametro. Para arrumar
esse código basta tirar a linha do r.volume e passar o 10 como
parametro.
*/

//Questão 04
/*
a) O resultado dos dois prints será 90, pois ao colocar
c1 = c2 é perdido a referencia de c2, dessa forma passando
a ter apenas uma conta.

b)O objeto para qual o c1 aponta é perdido e c1 e c2 irão 
apontar para a mesma conta.
*/

//Questão 05

class Jogador {
    
    força : number;
    nivel : number;
    pontosAtual : number;

    constructor(força : number, nivel : number, pontosAtual : number) {
        this.força = força;
        this.nivel = nivel;
        this.pontosAtual = pontosAtual;
    }

    calcAtaque(): number {
        this.pontosAtual = this.força * this.nivel;
        return this.pontosAtual
    }

    
    atacar(adversario : Jogador) :void{}

    
}

let j1 = new Jogador(10, 8, 0);
let j2 = new Jogador(20, 10, 0);
j1.calcAtaque();
console.log(j1);
console.log(j1.calcAtaque());


//Questão 06

class Conta {
    numero : String;
    saldo : number;

    constructor(numero : String, saldoInicial : number){
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    sacar(valor : number) : boolean{
        this.saldo = this.saldo - valor;
        if (this.saldo >= 0){
            return true;
        } else {
            return false;
        }
    }

    depositar(valor: number) : void{
        this.saldo = this.saldo + valor;
    } 

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        this.sacar(valor);
        if (this.saldo >= 0){
            contaDestino.depositar(valor);
            return true;
        } else {
            return false;
        }
        
    }
}

let c1 = new Conta("1", 100);
let c2 = new Conta("2", 100);
let c3 = new Conta("3", 50);
console.log(c1.sacar(200));
console.log(c1.transferir(c2, 50));
console.log(c3.sacar(10));
console.log(c3.transferir(c1, 10));

//Questão 07

class Produto {
    codigo : String;
    descriçao : String;
    valor : number;
    quantidadeMinima : number;
    quantidade : number;

    constructor(codigo : String, descriçao : String, valor: number, quantidadeMinima : number){
        this.codigo = codigo;
        this.descriçao = descriçao;
        this.valor = valor;
        this.quantidadeMinima = quantidadeMinima;
        
    }

    baixar(quantidade : number){
        if (quantidade < this.quantidadeMinima){
            return "Não é possivel reduzir essa quantidade!";
        } else{
            quantidade --
        }
    }

    repor(quantidade : number){
        quantidade++
    }

    reajuste(taxa : number){}

    
}

let p1 = new Produto("1", "leite", 10, 5);
p1.repor(50);

console.log(p1.quantidade)
console.log(p1.baixar(6))