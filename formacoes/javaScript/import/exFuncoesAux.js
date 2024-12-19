function maiorValor(numeros){
    let maiorNum = 0;

    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] > maiorNum){
            maiorNum = numeros[i] 
        }        
    }

    return maiorNum;
}

function gets(numeros){
    return maiorValor(numeros);
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };