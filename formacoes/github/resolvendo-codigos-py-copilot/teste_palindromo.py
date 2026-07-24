def verificar_palindromo(palavra):
    palavra = palavra.lower()
    
    invertida = palavra[::-1]
    
    if palavra == invertida:
        return True
    else:
        return False


texto = input("Digite uma palavra: ")

if verificar_palindromo(texto):
    print("A palavra é um palíndromo.")
else:
    print("A palavra não é um palíndromo.")