import { Account } from "./Account";

export class SalarieAccount extends Account{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void =>{
        const balanceCurrent: number = this.getBalance()
        const newBalance: number = balanceCurrent + value + 10
        this.setBalance(newBalance)
        console.log('Transação realizado com sucesso')
    }
}