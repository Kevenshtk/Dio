class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    dizerIMC(){
        console.log(`Meu IMC é ${calcularIMC(this.peso, this.altura)}`);
    }
}

function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

const jose = new Pessoa("José", 70, 1.75);

jose.dizerIMC();