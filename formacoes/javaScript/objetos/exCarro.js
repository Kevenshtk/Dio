class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = 1 / gastoMedioPorKm;
    }

    valorGastoCombustivel(distanciaKm, precoCombustivel){
        return (distanciaKm * this.gastoMedioPorKm) * precoCombustivel;   
    }
}

const uno = new Carro("Fiat", "azul", 12);

console.log(uno.valorGastoCombustivel(70, 5));