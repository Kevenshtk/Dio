import { Box, Container, Center, Flex, Input } from "@chakra-ui/react";
import { Button } from "./Button";
import { login } from "../service/login";

export const Login = () => {
  return (
    <Box
      minHeight="100vh"
      background="linear-gradient( #4169E1, #4363E4, #DD4563 100%)"
      p="25px"
    >
      <Container borderRadius="25px" backgroundColor="white" p="25px">
        <Center marginBottom="20px">
          <h1>Faça Login</h1>
        </Center>
          <form>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap="20px"
            >
              <Input w="50%" placeholder="Email" />
              <Input w="50%" placeholder="Senha" />
              <Button onClick={login} text="Entrar" />
            </Flex>
          </form>
      </Container>
    </Box>
  );
};
