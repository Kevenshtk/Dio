const pessoa = {
    nome: "Keven",
    idade: 21,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();