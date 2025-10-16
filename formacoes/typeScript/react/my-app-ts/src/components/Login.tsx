import { Container, Center, Flex, Input } from "@chakra-ui/react";
import { Button } from "./Button";
import { login } from "../service/login";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  return (
    <Container borderRadius="25px" backgroundColor="white" p="25px">
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
  );
};
