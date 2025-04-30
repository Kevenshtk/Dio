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

const Header = ({ autenticacao }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo" />
          {autenticacao && (
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
          {autenticacao ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/102769882?v=4"/>
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
