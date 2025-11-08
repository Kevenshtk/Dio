import { login } from "./login";

describe('login', () => {
    const mockEmail = 'keven@gmail.com'

    it('Exibe o Alert de Bem vindo caso o email seja valido!', async () => {
        const response = await login(mockEmail, '1234')
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@invalido', '1234')
        expect(response).toBeFalsy()
    });
});