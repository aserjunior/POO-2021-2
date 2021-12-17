//Questão 01

class Veiculo {
    placa : string
    ano : number
}

class Carro extends Veiculo {
    modelo : string

}

class CarroEletrico extends Carro {
    autonomiaBateria :  number
}

//Questão 02

class Calculadora {
    private _op1 : number;
    private _op2 : number;

    get op1(){
        return this._op1

    }

    get op2(){
        return this._op2
    }

    constructor (_op1 : number, _op2 : number) {
        this._op1 = _op1;
        this._op2 = _op2;
    }

    soma() {
        let somar = this._op1 + this._op2;
        return somar;
    }

}

let a : Calculadora = new Calculadora(30,11);
console.log(a.soma())

//Questão 03

class CalculadoraCientifica extends Calculadora {
    exponeciar(){
        let expo = this.op1 ** this.op2
        return expo
    }
}

let b : CalculadoraCientifica = new CalculadoraCientifica(2,4);
console.log(b.exponeciar());

/*
c)Sim, apos a criação do metodo exponeciar, foi necessario retornar
a classe Calculadora para realizar o get() dos parametos privados
para que fosse possivel acessar os atributos na nova classe criada.
*/



//Questão 04

class Conta {
	private _numero: String;
	private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}
	
	get numero(): String {
		return this._numero;
	}

	get saldo(): number {
		return this._saldo;
	}
	
	sacar(valor: number): void {
		if (this._saldo >= valor) {
			this._saldo = this._saldo - valor;
		}
	}

	depositar(valor: number): void {
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}
}

class Poupanca extends Conta {
	private _taxaJuros: number;

	constructor(numero: String, saldo: number, taxaJuros: number ) {
		super(numero, saldo);
		this._taxaJuros = taxaJuros;
	}

	public renderJuros(): void {
		this.depositar(this.saldo * this._taxaJuros/100);
	}

	get taxaJuros(): number {
		return this._taxaJuros
	}
}

let conta: Conta = new Conta("1", 100);
let poupanca: Poupanca = new Poupanca("2",100,0.5);
poupanca.renderJuros();
console.log(poupanca.saldo);

let poupanca2: Conta = new Poupanca("3",100, 1);
poupanca2.depositar(100);
(<Poupanca> poupanca2).renderJuros();
console.log(poupanca2.saldo);



class Banco {
	private _contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this._contas.push(conta);
        }
	}

	consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this._contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i+1];
			}

			this._contas.pop();
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

    transferir(numeroDebito: string, numeroCredito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    calcularQuantidadeContas(): number {
        return this._contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }

	renderJuros(numero: String) {
		let contaConsultada = this.consultar(numero);
		
		if (contaConsultada instanceof Poupanca) {
			let poupanca: Poupanca = <Poupanca> contaConsultada;
			poupanca.renderJuros();
		}
	}
}


let banco : Banco = new Banco();

banco.inserir(new Conta("1", 100));
banco.inserir(new Poupanca("2", 100, 0.5));
banco.depositar("2",200);
banco.renderJuros("2");
banco.renderJuros("1");
console.log(banco.consultar("1").saldo);


//Questão 05

class Produto {
    private _id : number;
    private _descricao : string;
    private _quantidade : number;
    private _valor : number;

    constructor(id : number,
                descricao : string,
                quantidade : number,
                valor : number){
                    this._id = id
                    this._descricao = descricao
                    this._quantidade = quantidade
                    this._valor = valor
               }

    get id(){
        return this._id
    }

    get descricao(){
        return this._descricao
    }

    get quantidade(){
        return this._quantidade
    }

    get valor(){
        return this._valor
    }
    
    repor(numero : number) :void {
        this._quantidade = this._quantidade + numero

    }

    darBaixa(numero : number) :void{
        this._quantidade = this._quantidade - numero

    }


}

class ProdutoPerecivel extends Produto {
    private _dataValidade : Date;

    constructor(id : number,
        descricao : string,
        quantidade : number,
        valor : number,
        data : Date){
            super(id, descricao, quantidade, valor);
            this._dataValidade = data
        }
        
        
    

    validade() {
        if (this._dataValidade <= new Date(2021,11,22)){
            return 'Produto não está vencido!!!'
        } else {
            return 'Produto está vencido'
        }

    }
}

class Estoque {
    private produtos : Produto[] = [];

    inserir(produto : Produto) : void {
        let produtoConsultado = this.consultar(produto.id);
        
        if(produtoConsultado == null){
            this.produtos.push(produto);
        }
    }

    consultar(numero : number) : Produto {
        let produtoConsultado : Produto;
        for (let produto of this.produtos) {
            if (produto.id == numero) {
                produtoConsultado = produto;
                break
            }
        }
        return produtoConsultado

    }

    consultaIndice(numero : number) :number {
        let indice : number = -1;
        for (let i: number = 0; i < this.produtos.length; i ++) {
            if (this.produtos[i].id == numero) {
                indice = i;
                break
            }
        }
        return indice;
    }

    excluir(numero : number) : void {
        let indice : number = this.consultaIndice(numero)

        if (indice != -1) {
            for (let i : number = indice; i < this.produtos.length; i++){
                this.produtos[i] = this.produtos[i+1];
            }

            this.produtos.pop();

        }
    }   

}

let z : Produto = new Produto(1,'agua', 1, 30)
let x : ProdutoPerecivel = new ProdutoPerecivel(2,'comida',4,10, new Date(2021,11,23))

console.log(x.validade())