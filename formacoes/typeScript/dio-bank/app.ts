import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { SalarieAccount } from './class/SalarieAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'keven', 1)
peopleAccount.deposit(50)
peopleAccount.withdraw(50)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 3)
companyAccount.getLoan(50)

const salarieAccount: SalarieAccount = new SalarieAccount('joao', 1)
salarieAccount.deposit(50)