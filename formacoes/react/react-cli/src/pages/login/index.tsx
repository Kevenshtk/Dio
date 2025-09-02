import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

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

import type { IFormData } from "./types";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email não é válido")
      .required("Campo obrigatório"),
    senha: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.senha}`
      );

      if (data.length === 1) {
        handleClickSignIn();
      } else {
        alert("Email ou senha inválidos!");
      }
    } catch (error) {
      alert("Houve um erro, tente novamente.");
    }
  };

  const handleClickSignIn = () => {
    navigate("/feed");
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors.email && errors.email.message}
                control={control}
                type="email"
                placeholder="email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="senha"
                errorMessage={errors.senha && errors.senha.message}
                control={control}
                type="password"
                placeholder="senha"
                leftIcon={<MdLock />}
              />
              <Button type="submit" title="Entrar" variant="secondary" />
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
