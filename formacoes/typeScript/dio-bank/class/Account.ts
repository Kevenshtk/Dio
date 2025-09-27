export abstract class Account {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string =>{
        return this.name
    }

    getBalance = (): number => {
        return this.balance
    }

    setBalance = (balance: number): void => {
        this.balance = balance
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            const balanceCurrent = this.getBalance()
            this.setBalance(balanceCurrent + value)
            console.log('Transação realizado com sucesso')
        }
    }

    withdraw = (value: number): void  => {
        if(this.validateStatus()){
            const balanceCurrent: number = this.getBalance()
            const newBalance: number = balanceCurrent - value

            if (balanceCurrent >= newBalance) {
                this.setBalance(newBalance)
                console.log('Transação realizado com sucesso')
            } else {
                console.log('Saldo insuficiente')
            }
        }
    }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}