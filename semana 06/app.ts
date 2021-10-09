//Questão 1
/*
As classes são modelos, como por exemplo, uma receita, um projeto ou uma planta
que, ao ser executado resultara em um objeto como uma casa, um bolo.
*/

//Questão 2
/*
Atributos são as características e propriedades que os objetos possuem, já os
métodos são os comportamentos de um objeto ou ações que um objeto pode realizar.
Um exemplo de objeto pode ser uma pessoa, onde seus atributos serão cor, altura
e os métodos serão ações que esta pessoa poderá executar, como comprar, vender 
entre outras.
*/

//Questão 3
/*
PESO: Importa = Sistema academia / Não importa = Sistema bancario
TIPO DE CNH: Importa = Sistema transito / Não importa = Sistema de saúde
TIPO SANGUINEO: Importa = Sistema de saúde / Não importa = Sistema transito
HABILIDADE DESTRA: Importa = Sistema de esporte / Não importa = Sistema bancario
PERCENTUAL DE GORDURA: Importa = Sistema de nutrição / Não importa = Sistema bancario
SALDO DA CONTA: Importa = Sistema bancario / Não importa = Sistema transito
ETINIA: Importa = Sistema sociais / Não importa = Sistema de saude
*/

//Questão 4
/*
a) Seria bastante interessante um objeto conta possuir um atributo pessoa
pois dessa forma estariamos abstraindo a questão real para o pensamento
computacional.

b)Não seria interessante uma pessoa ter varias contas atribuidas. Nesse caso
especifico, acho que as contas seriam considerados atributos.
*/

//Questão 5
/*
Professor, reitor, coordenador, monitor, pedagógico
*/

//Questão 6
/*
Atleta: Atributo > Time, função, altura, peso, número / Metodos > Jogar, defender, atacar, correr
Juiz: Atributo > Regras, cartão, faltas / Metodos > Arbitrar, controlar, punir
Tecnico: Atributo > tatica / Metodos > Treinar, ajustar
Torcedor: Atributo > time, ingresso / Metodos > Torcer, festejar, incentivar
Jornalista: Atributo > entrevista, transmissão, noticia, bastidores / Metodos > Entrevistar, transmitir
*/

//Questão 7

class Retangulo{
    l1 : number;
    l2 : number;

    calcularPerimetro(): number {
        return (this.l1 * 2) + (this.l2 * 2);
    }

}

let TestaRetangulo : Retangulo;
TestaRetangulo = new Retangulo();

TestaRetangulo.l1 = 10;
TestaRetangulo.l2 = 20;

console.log(TestaRetangulo.calcularPerimetro());
      

//Questão 8

class Circulo{
    raio : number;

    calcularArea(): number {
        return (this.raio ** 2) * 3.14 ;
    }

    calcularPerimetro(): number{
        return (this.raio * 3.14 * 2)
    }
}

let circulo : Circulo;
circulo = new Circulo();

circulo.raio = 5;

console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());

//Questão 9

class SituaçaoFinanceira{
    valorCreditos: number;
    valorDebitos: number;

    saldo(): number{
        return (this.valorCreditos - this.valorDebitos);
    }   
}

let situaçaoFinanceira : SituaçaoFinanceira;
situaçaoFinanceira = new SituaçaoFinanceira();

situaçaoFinanceira.valorCreditos = 5000;
situaçaoFinanceira.valorDebitos = 2950;

console.log(situaçaoFinanceira.saldo());