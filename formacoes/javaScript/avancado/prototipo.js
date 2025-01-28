const pessoa = {
    genero: 'masculino'
}

const user = {
    nome: 'Keven',
    idade: 22
}

Object.setPrototypeOf(user, pessoa)

console.log(user.genero)

// o mesmo que isso:

/*class Pessoa {
    constructor(genero){
        this.genero = genero
    }
}

class User extends Pessoa {
    constructor(nome, idade, genero){
        super(genero)
        this.nome = nome
        this.idade = idade
    }
}

const user = new User('keven', 22, 'masculino')

console.log(user)*/