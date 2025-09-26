// Variáveis

let b: string = 'b'
let n: number = 2
let x: boolean = true

let m: string | number = 2

// Objeto

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: "keven",
    idade: 22
}

const outraPessoa: Pessoa = {
    nome: "paulo",
    idade: 26,
    profissao: "programador"
}

// Array
const arrayPessoa: Array<Pessoa> = [pessoa, outraPessoa];

const arrayNum: number[] = [1, 2, 3, 4];

const arrayString: Array<string> = ["a", "b", "c"];

