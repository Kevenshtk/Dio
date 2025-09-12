import { createContext, useState } from "react";
import type { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import type { IUser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContentext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContentextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  
  const navigate = useNavigate();

  const handleLogin = async (loginDate: ILoginData) => {
    try {
      const { data } = await api.get(
        `users?email=${loginDate.email}&senha=${loginDate.senha}`
      );

      if (data.length === 1) {
        setUser(data[0]);
        navigate("/feed");
      } else {
        alert("Email ou senha inválidos!");
      }
    } catch (error) {
      alert("Houve um erro, tente novamente.");
    }
  };

  return (
    <AuthContentext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContentext.Provider>
  );
};
