const pessoa = { // OBJETO
    nome: "Keven",
    idade: 21,

    descrever: function (){ // MÉTODO
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();