const fs = require('fs');
const path = require('path');

const caminhoDoArquivo = path.resolve(__dirname, 'tarefas.csv');

async function buscarArquivo(){
    try{
        const arquivo = await fs.promises.readFile(caminhoDoArquivo);
        const textoArquivo = arquivo.toString('utf8');
        console.log(textoArquivo);
    } catch (erro){
        console.error('Erro ao ler o arquivo:', erro);
    } finally {
        console.log('Busca finalizada');
    }
}

buscarArquivo();