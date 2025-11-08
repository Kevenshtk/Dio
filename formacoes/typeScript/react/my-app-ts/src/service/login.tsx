import { api } from "../api";

export const login = async (email: string, password: string): Promise<boolean> => {
  const data: any = await api

  if (data.email !== email) {
    return false;
  }
  
  return true;
};
