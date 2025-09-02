import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import {
  Container,
  Title,
  Column,
  SubTitleLogin,
  TitleLogin,
  TextContent,
  TextContentLogin,
  Wrapper,
} from "./styles";

import { api } from "../../services/api";

import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import type { IFormData } from "./types";

const schema = yup
  .object({
    nome: yup
      .string()
      .min(10, "Insira o nome completo")
      .required("Campo obrigatório"),
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

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData : IFormData) => {
    try {
      await api.post(
        "users",
        {
            "nome": formData.nome,
            "email": formData.email,
            "senha": formData.senha
        },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      alert("Cadastro realizado com sucesso!");
      handleClickSignIn();

    } catch (error) {
      alert("Houve um erro, tente novamente.");
    }
  };

  const handleClickSignIn = () => {
    navigate("/login");
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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                errorMessage={errors.nome && errors.nome.message}
                control={control}
                type="text"
                placeholder="Nome completo"
                leftIcon={<FaUser />}
              />
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
              <Button
                type="submit"
                title="Criar minha conta"
                variant="secondary"
              />
            </form>
            <TextContent>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </TextContent>
            <TextContentLogin>Já tenho conta. <span onClick={() => navigate("/login")}>Fazer login</span></TextContentLogin>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
