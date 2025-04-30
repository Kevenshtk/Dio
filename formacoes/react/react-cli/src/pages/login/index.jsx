import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { MdEmail, MdLock } from "react-icons/md";

import {
  Container,
  Title,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  TitleLogin,
  Wrapper,
} from "./styles";

const Login = () => {
    const navigate = useNavigate();
  
    const handleClickSignIn = () => {
      navigate('/feed')
    }
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
            <form>
              <Input type="email" placeholder="email" leftIcon={<MdEmail />} />
              <Input type="password" placeholder="senha" leftIcon={<MdLock />} />
              <Button type="button" title="Entrar" variant="secondary" onClick={handleClickSignIn}/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
