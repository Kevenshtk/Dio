const conta = {
    email: 'keven@gmail.com',
    password: '123456',
    name: 'keven'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})