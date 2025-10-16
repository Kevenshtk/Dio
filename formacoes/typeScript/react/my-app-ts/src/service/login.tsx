import { api } from "../api";

export const login = async (email: string, password: string): Promise<void> => {
  const data: any = await api

  data.email !== email ? alert("Email inválido!") : alert(`Bem vindo ${email}!`);
};
