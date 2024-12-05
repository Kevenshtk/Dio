let numVitoria = 105;
let numDerrota = 5;
let saldoVitorias;
let nivel;

function retornaSaldoVitoria(numVitoria, numDerrota){
    return numVitoria - numDerrota;
}

function retornaNivel(saldoVitoria){
    if(saldoVitoria <= 10){
        return "Ferro";
    } else if(saldoVitoria >= 11 && saldoVitoria <= 20){
        return "Bronze";
    } else if(saldoVitoria >= 21 && saldoVitoria <= 50){
        return "Prata";
    } else if(saldoVitoria >= 51 && saldoVitoria <= 80){
        return "Ouro";
    } else if(saldoVitoria >= 81 && saldoVitoria <= 90){
        return "Diamante";
    } else if(saldoVitoria >= 91 && saldoVitoria <= 100){
        return "Lendário";
    } else if(saldoVitoria >= 101){
        return "Imortal";
    }
}

saldoVitorias = retornaSaldoVitoria(numVitoria, numDerrota);
nivel = retornaNivel(saldoVitorias);

console.log("Calculadora de partidas Rankeadas\n");
console.log(`O Herói tem de saldo ${saldoVitorias} de vitórias e está no nível de ${nivel}\n`);