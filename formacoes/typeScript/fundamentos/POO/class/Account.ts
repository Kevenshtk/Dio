export abstract class Account {
    private name: string
    readonly accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string =>{
        return this.name
    }

    setName = (name: string):void => {
        this.name = name
    }

    deposit = (): void => {
        if(this.validateStatus()){
            console.log('Você depositou')
        }
    }

    withdraw = (): void  => {
        console.log('Voce sacou')
    }

    getBalance = (): void  => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}