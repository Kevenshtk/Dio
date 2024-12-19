const {addNum, retornaMaiorMenor} = require('./funcoes')

let quantNum = 5;
let entrada = [3, 4, 1, 10, 8];


for (let i = 0; i < quantNum; i++) {
    addNum(entrada[i]);
}

retornaMaiorMenor();