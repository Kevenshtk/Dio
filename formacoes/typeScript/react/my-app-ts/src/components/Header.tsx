import * as Chakra from "@chakra-ui/react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`;

export const Header = () => {
  return (
    <Chakra.Flex w="100%" p="20px" justifyContent="space-between" alignItems="center">
      <Chakra.Box>
        <Title>Dio Bank</Title>
      </Chakra.Box>

      <Chakra.Spacer />

      <Chakra.Box>
        <Chakra.Link p="20px">HOME</Chakra.Link>
        <Chakra.Link p="20px">SOBRE</Chakra.Link>
        <Chakra.Link p="20px">BLOG</Chakra.Link>
      </Chakra.Box>
    </Chakra.Flex>
  );
};
