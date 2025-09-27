import { Account } from './Account'

export class CompanyAccount extends Account{

    constructor(name: string, accountNumeber: number){
        super(name, accountNumeber)
    }

    getLoan = (value: number): void  => {
        if(this.validateStatus()){
            this.deposit(value)
            console.log('Empréstimo realizado com sucesso')
        }
        
    }
}