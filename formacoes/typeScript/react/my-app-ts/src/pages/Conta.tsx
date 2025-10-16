import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";
import { useNavigate, useParams } from "react-router-dom";

interface IUserData {
  id: string;
  email: string;
  password: string;
  name: string;
  balance: number;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | IUserData>();
  const { id } = useParams();
  const navegate = useNavigate();
  const actualData = new Date();

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  if (userData && id !== userData.id) {
    navegate("/");
  }

  return (
    <Center>
      <SimpleGrid column={2} spacing={8} paddingTop={16}>
        {userData === null || userData === undefined ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${actualData.getDate()} / ${
                actualData.getMonth() + 1
              } / ${actualData.getFullYear()} - ${actualData.getHours()}:${actualData.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData?.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
