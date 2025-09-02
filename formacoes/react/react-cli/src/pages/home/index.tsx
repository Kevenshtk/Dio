import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, Title, TitleHighLight, TextContent } from "./styles";

import banner from "../../assets/banner.png"

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e aprenda na prática em projetos reais.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          ></Button>
        </div>
        <div>
          <img src={banner} alt="Banner" />
        </div>
      </Container>
    </>
  );
};

export { Home };
