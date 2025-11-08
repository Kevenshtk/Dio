import { Container } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Container borderRadius="25px" backgroundColor="white" p="25px">
      {children}
    </Container>
  );
};
