import { login } from "./login";

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'keven@gmail.com'

    it('Exibe o Alert de Bem vindo caso o email seja valido!', async () => {
        await login(mockEmail, '1234')
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })

    it('Não Exibe o Alert de Bem vindo em o email!', async () => {
        await login(mockEmail , '1234')
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    });

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido', '1234')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    });

})