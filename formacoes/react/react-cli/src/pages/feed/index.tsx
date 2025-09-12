import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex= {1}>
        <TitleHighlight> # RACKING 5 TOP DA SEMANA</TitleHighlight>
        <UserInfo
          name="Keven Di Camargo"
          percentual={80}
          image="https://avatars.githubusercontent.com/u/102769882?v=4"
        />
        <UserInfo
          name="Keven Camargo"
          percentual={50}
          image="https://avatars.githubusercontent.com/u/102769882?v=4"
        />
        <UserInfo
          name="Kevin De Camargo"
          percentual={35}
          image="https://avatars.githubusercontent.com/u/102769882?v=4"
        />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
