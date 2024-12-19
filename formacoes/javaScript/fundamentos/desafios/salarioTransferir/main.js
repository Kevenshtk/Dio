let valorBruto = 2000;
let beneficios = 250;

function retornaPorcentagem(valorBruto){
    if(valorBruto <= 1100){
        return 5;
    } else if (valorBruto > 1100 && valorBruto <= 2500){
        return 10;
    } else if(valorBruto > 2500){
        return 15;
    }
}
function retornaSalarioLiquido(valorBruto, beneficios){
    let porcentagem = retornaPorcentagem(valorBruto);
    let valorLiquido = 0;

    porcentagem = porcentagem / 100;

    valorLiquido = (valorBruto - (valorBruto * porcentagem)) + beneficios;

    console.log(`O valor a ser transferido é ${valorLiquido}`);
}

retornaSalarioLiquido(valorBruto, beneficios);