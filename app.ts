//Questão 01

//Questão 02
class triangulo {
    constructor(public a : number,
                public b : number, 
                public c : number) {}

    checar() : boolean {
        let sub = (this.b - this.c);
        let som = (this.b + this.c);
        if(sub < this.a && this.a < som){
            return true
        } else {
            return false
        }

        }
        

    ehIsosceles() : boolean {
        if (this.checar() == true && this.a == this.b && this.a != this.c){
            return true
        } else{
            return false
        }
    }

    ehEquilatero() : boolean{
        if (this.checar() == true && this.a == this.b && this.a == this.c){
            return true
        } else {
            return false
        }
    }

    ehEscaleno() : boolean{
        if (this.checar() == true && this.a != this.b && this.a != this.c){
            return true
        } else {
            return false
        }
    }



}

let t1 = new triangulo(10, 10, 10);
let t2 = new triangulo(10, 10, 12)
console.log(t1.ehEquilatero());
console.log(t1.ehEscaleno());
console.log(t1.ehIsosceles());
console.log(t2.ehIsosceles());

//Questão 03
class Conta {
	numero: String;
	saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}



let contas2: Conta[] = [];
let c1: Conta = new Conta("1",100);
contas2[0] = c1;
console.log(contas2[0].saldo);
//console.log(contas[1].saldo); undefined

contas2[1] = new Conta("2", 200);
console.log(contas2[1].saldo);
contas2.push(new Conta("3", 300));
console.log(contas2[2].saldo);


class Banco {
	contas: Conta[] = [];
	
	inserir(conta: Conta): void {
		this.contas.push(conta);
		
		
	}
	
	consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

	sacar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.sacar(valor);
		}
	}

	totalContas() : number {
		return this.contas.length
	}

    totalDin() : number{
        var dinFinal = this.contas[0].saldo
        for(let i :number = 1; i < this.contas.length; i++){
            dinFinal += this.contas[i].saldo
    }return dinFinal;
}
    media() : number{
        var mediaSaldo = (this.totalDin() / this.totalContas())
        return mediaSaldo
    }
}

let banco: Banco = new Banco();
banco.inserir(c1);
banco.inserir(new Conta("2",200));
banco.inserir(new Conta("3",300));

console.log(banco.consultar("2").saldo);
console.log(banco.consultar("1").saldo);
banco.media()
banco.alterar(new Conta("3", 3300));
console.log(banco.consultar("3").saldo);
banco.excluir("1");

banco.depositar("3", 50);
console.log(banco.consultar("3").saldo);
console.log(banco.totalContas())
console.log(banco.media())

//Questão 04
class Postagem {
    constructor(public id : number,
                public texto : string,
                public quantidadeCurtidas : number){}
    
                
    curtir() : void{
        this.quantidadeCurtidas++;
    }
    
    toString() : string{
        return (this.texto + this.quantidadeCurtidas);
    }



}

class Microblog {
    postagens : Postagem[] = [];

    incluir(postagem :Postagem) : void {
        this.postagens.push(postagem);
    }

    busca(numero : number) : Postagem {
        let postagemCheck: Postagem;
        for (let postagem of this.postagens) {
            if (postagem.id == numero) {
                postagemCheck = postagem
                break
            }
        }
        return postagemCheck;
    }

    buscaId(numero: number) : number {
        let indice : number = -1;
        for (let i: number = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == numero){
                indice = i;
                break
            }
        }
        return indice;
    }

    excluir(id : number): void{
        let indice :number = this.buscaId(id);
        if (indice != -1){
            for (let i : number = indice; i < this.postagens.length; i++){
                this.postagens[i] = this.postagens[i+1];
            }
            
            this.postagens.pop();
        }
    } 
    
    maisCurtidas() : Postagem{
        let maisLikes = this.postagens[0].quantidadeCurtidas;
        let maislikes2 = this.postagens[0];
        for (let i :number = 0; i < this.postagens.length; i++){
            if (this.postagens[i].quantidadeCurtidas > maisLikes){
                maisLikes = this.postagens[i].quantidadeCurtidas
                maislikes2 = this.postagens[i]
            }
        }
        return maislikes2;
    }

    toString2() : string{
        var stringFinal : string = this.postagens[0].texto
        for(let i :number = 1; i < this.postagens.length; i++){
            stringFinal += this.postagens[i].texto 
        }return stringFinal
    }

    curtir(id : number){
        let postagemConsul = this.busca(id);

        if(postagemConsul != null) {
            postagemConsul.curtir();
        }
    }

}



let microblog: Microblog = new Microblog();
microblog.incluir(new Postagem(1, "Oi ", 0))
microblog.incluir(new Postagem(4, "Oi ", 100))
microblog.incluir(new Postagem(2,"alo ", 200))
microblog.incluir(new Postagem(3,"casa ", 120))
console.log(microblog.busca(1))
console.log(microblog.toString2())
//microblog.excluir(2)
microblog.curtir(2)

console.log(microblog.maisCurtidas())

let p1 = new Postagem(1,"Hello World ", 0);
p1.curtir();
console.log(p1.toString());

