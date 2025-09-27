import { PeopleAccount } from './POO/class/PeopleAccount'
import { CompanyAccount } from './POO/class/CompanyAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'keven', 1)
peopleAccount.deposit()
peopleAccount.withdraw()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 3)
companyAccount.deposit()
