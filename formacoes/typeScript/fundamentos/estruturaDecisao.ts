const num: number = 15;

if(num > 15) {
    console.log("Num maior que 15");
} else if(num === 15) {
    console.log("Num é igual a 15");
} else {
    console.log("Num menor que 15");
}

const typeUser = {
    admin: "Seja bem vindo admin",
    student: "Você é um estudante",
    viwer: "Você pode visualizar"
}

const user = "admin";

function functionValidateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser]);
}

functionValidateUser(user);