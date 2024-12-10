class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque

        switch(this.tipo){
            case "guerreiro":
                ataque = "espada"
            break

            case "mago":
                ataque = "magia"
            break

            case "monge":
                ataque = "artes marciais"
            break

            case "ninja":
                ataque = "shuriken"
            break
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let h1 = new heroi("A", 20, "mago")
let h2 = new heroi("I", 40, "guerreiro")
let h3 = new heroi("O", 23, "monge")
let h4 = new heroi("U", 35, "ninja")


h1.atacar()
h2.atacar()
h3.atacar()
h4.atacar()