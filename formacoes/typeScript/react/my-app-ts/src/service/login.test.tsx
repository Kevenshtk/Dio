import { login } from "./login";

describe('login', () => {
    const mock = jest.fn()
    window.alert = mock

    it('Exibe o Alert de Bem vindo!', () => {
        login()
        expect(mock).toHaveBeenCalledWith('Bem vindo!')
    })
})