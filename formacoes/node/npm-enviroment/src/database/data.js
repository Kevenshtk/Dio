async function connectToDatabase(user, password) {
  if (
    user === process.env.USERDATABASE &&
    password === process.env.PASSWORDDATABASE
  ) {
    console.log("conexão com o banco de dados estabelecida");
  } else {
    console.log("Falha de login, não foi possível se conectar");
  }
}

export default connectToDatabase;
