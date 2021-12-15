//Questão 01

class Calculadora {
    private operando1 : number;
    private operando2 : number;

    constructor(operando1 : number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    soma() {
        let somar = this.operando1 + this.operando2
        return somar
    }

    subtrair() {
        let sub = this.operando1 - this.operando2
        return sub
    }


}

let a : Calculadora = new Calculadora(10,20);
console.log(a.soma())
//a.operando1  (privado)
//a.operando2  (privado)


//Questão 02

class Hora {
    private _horas : number;
    private _minutos : number;
    private _segundos : number;

    constructor(hora : number, minutos : number, segundos : number){
        this._horas = hora;
        this._minutos = minutos;
        this._segundos = segundos;

    }

    get hora(){
        return this._horas
    }

    get minutos(){
        return this._minutos
    }

    get segundos(){
        return this._segundos
    }

    horario(){
        return (`${this._horas}h:${this._minutos}min:${this._segundos}seg`)
    }
}

let a : Hora = new Hora(10,30,40)
console.log(a.horario())


//Questão 03 e Questão 04

class Conta {
	private _numero: String;
	private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}

	get numero(){
		return this._numero;
	}

	get saldo(){
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

class Banco {
	private contas: Conta[] = [];
	
	
	inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this.contas.push(conta);
        }
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

	private consultarPorIndice(numero: String): number {
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

    transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    calcularQuantidadeContas(): number {
        return this.contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (conta of this.contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }
}


let conta : Conta = new Conta("1", 100)
let b: Banco = new Banco();
b.inserir(conta);
b.inserir(new Conta("1", 20));
//b.sacar("1",20);
console.log(conta.saldo);

b.inserir(new Conta("2", 200));

b.transferir("1","2", 10);
console.log(b.consultar("1").saldo);
console.log(b.consultar("2").saldo);
console.log(b.calcularQuantidadeContas());
console.log(b.calcularTotalSaldos());
console.log(b.calcularMediaSaldos());
