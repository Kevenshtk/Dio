import * as Chakra from "@chakra-ui/react";
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`;

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();


  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  }


  return (
    <Chakra.Flex
      w="100%"
      p="20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Chakra.Box>
        <Title>Dio Bank</Title>
      </Chakra.Box>

      <Chakra.Spacer />

      <Chakra.Box>
        <Chakra.Link p="20px">HOME</Chakra.Link>
        <Chakra.Link p="20px">SOBRE</Chakra.Link>
        <Chakra.Link p="20px">BLOG</Chakra.Link>
        {isLoggedIn && <Chakra.Button onClick={() => logout()}>Sair</Chakra.Button>}
      </Chakra.Box>
    </Chakra.Flex>
  );
};
