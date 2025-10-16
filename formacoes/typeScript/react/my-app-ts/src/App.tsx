import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import { Header } from "./components/Header";
import { Box, ChakraProvider } from "@chakra-ui/react";
import ContaInfo from "./pages/ContaInfo";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Box
          minHeight="100vh"
          background="linear-gradient( #4169E1, #4363E4, #DD4563 100%)"
          p="25px"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta/:id" element={<Conta />} />
            <Route path="/containfo" element={<ContaInfo />} />
          </Routes>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
