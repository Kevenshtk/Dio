const fs = require('fs');
const path = require('path');

const caminhoDoArquivo = path.resolve(__dirname, 'tarefas.csv');

const promessaDeLeitura = fs.promises.readFile(caminhoDoArquivo);

promessaDeLeitura
.then((arquivo) => arquivo.toString('utf8'))
.then((texto) => texto.split('\n').slice(1))
.then((linhas) => linhas.map((linha) => {
    const [nome, feito] = linha.split(';');
    return{
        nome,
        feito: feito === 'true'
    }
}))
.then((tarefas) => console.log(tarefas))
.catch((erro) => console.error('Erro ao ler o arquivo:', erro))