class User {
    name: string = 'keven'
    age: number = 22

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user: User = new User('Keven', 22)
user.showName()

const otherUser: User = new User('joao', 23)
otherUser.showName()