import { Account } from './Account'

export class CompanyAccount extends Account{

    constructor(name: string, accountNumeber: number){
        super(name, accountNumeber)
    }

    getLoan = (): void  => {
        console.log('Voce pegou um empréstimo')
    }

    deposit = (): void => {
        console.log('A empresa depositou')
    }
}