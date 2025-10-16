const conta = {
    id: '1',
    email: 'keven@gmail.com',
    password: '123456',
    name: 'keven',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})