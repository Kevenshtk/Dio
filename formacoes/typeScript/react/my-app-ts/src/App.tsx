import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./components/AppContext";
import { MainRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Header />
          <Box
            minHeight="100vh"
            background="linear-gradient( #4169E1, #4363E4, #DD4563 100%)"
            p="25px"
          >
            <MainRoutes />
          </Box>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
