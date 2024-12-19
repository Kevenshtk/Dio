class Pessoa{
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e meu ano de nascimento é ${this.anoNascimento}`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`O ${p1.nome} é mais velho que o ${p2.nome}`);
    } else if(p1.idade < p2.idade){
        console.log(`O ${p2.nome} é mais velho que o ${p1.nome}`);
    } else {
        console.log("Ambos possuem a mesma idade");
    }
}

const keven = new Pessoa("keven", 21);
const irineu = new Pessoa("irineu", 21);

//keven.descrever();

compararPessoas(keven, irineu);