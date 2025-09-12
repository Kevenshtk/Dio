import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { Cadastro } from "./pages/cadastro";
import { AuthContentextProvider } from "./context/auth";

function App() {
  return (
    <Router>
      <AuthContentextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </AuthContentextProvider>
    </Router>
  );
}

export default App;
