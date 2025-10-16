import { Box, Container, Center, Flex, Input } from "@chakra-ui/react";
import { Button } from "./Button";
import { login } from "../service/login";
import { useState, useEffect } from "react";
import { api } from "../api";

interface IUserData {
  email: string;
  password: string;
  name: string;
}

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<null | IUserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  return (
    <Box
      minHeight="100vh"
      background="linear-gradient( #4169E1, #4363E4, #DD4563 100%)"
      p="25px"
    >
      <Container borderRadius="25px" backgroundColor="white" p="25px">
        {(userData === null || userData === undefined) ? (
          <h1>Carregando...</h1>
        ) : (
          <h1>Informações carregadas</h1>
        )}
        <Center marginBottom="20px">
          <h1>Faça o login</h1>
        </Center>
        <form>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="20px"
          >
            <Input
              w="50%"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Input
              w="50%"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <Button onClick={() => login(email, password)} text="Entrar" />
          </Flex>
        </form>
      </Container>
    </Box>
  );
};
