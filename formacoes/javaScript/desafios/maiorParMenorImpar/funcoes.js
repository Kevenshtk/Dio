const numeros = [];
const numsPar = [];
const numsImpar = [];

function addNum(num){
    numeros.push(num);
}

function separarNum(numeros){
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            numsPar.push(numeros[i]);
        } else {
            numsImpar.push(numeros[i]);
        }
    }
}

function retornaMaiorMenor(){
    separarNum(numeros);

    let maiorPar = 0;
    let menorImpar = numsImpar[0];

    for (let i = 0; i <= numsPar.length; i++) {
        if(numsPar[i] > maiorPar){
            maiorPar = numsPar[i];
        }
    }

    for (let i = 0; i <= numsImpar.length; i++) {
        if(numsImpar[i] < menorImpar){
            menorImpar = numsImpar[i];
        }
    }

    console.log(`O maior número par é ${maiorPar}`);
    console.log(`O menor número impar é ${menorImpar}`);
}

module.exports = { addNum, retornaMaiorMenor }