import { useNavigate } from "react-router-dom";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

import { Button } from "../Button";

import logo from "../../assets/logo-dio.png";
import { useContext } from "react";
import { AuthContentext } from "../../context/auth";

const Header = () => {

  const { user } = useContext(AuthContentext);

  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login')
  }

  const handleClickCadastro = () => {
    navigate('/cadastro')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo" />
          {user.name && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar" />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          )}
        </Row>
        <Row>
          {user.name ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/102769882?v=4"/>
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickLogin} />
              <Button title="Cadastrar" onClick={handleClickCadastro}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
