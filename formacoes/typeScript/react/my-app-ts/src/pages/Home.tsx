import { ChakraProvider } from "@chakra-ui/react";
import { Card } from "../components/Card";

const Home = () => {
  return (
    <ChakraProvider>
      <Card />
    </ChakraProvider>
  );
};

export default Home;