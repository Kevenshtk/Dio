import { ChakraProvider, Center, Flex, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useContext, useState } from "react";
import { login } from "../service/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../service/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert("Email ou senha incorreta");
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate("/conta/1");
  };

  return (
    <ChakraProvider>
      <Card>
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
            <Button
              onClick={() => validateUser(email, password)}
              text="Entrar"
            />
          </Flex>
        </form>
      </Card>
    </ChakraProvider>
  );
};

export default Home;
