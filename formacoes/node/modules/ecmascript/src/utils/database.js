export const dataBaseType = {
  userType: "admin",
  typeData: "datalocal",
};

export async function connenctToDatabase(dataName) {
  console.log("se conectando ao banco: " + dataName);
};

export async function disconnenctToDatabase() {
  console.log("desconectando");
};
