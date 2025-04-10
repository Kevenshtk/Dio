import { useState } from "react";
import Logo from "../assets/github.png";
import { Container } from "./styles.js";
import Input from "../components/Input";
import Button from "../components/Button";
import ItensRepo from "../components/ItensRepo";
import { api } from "../services/api";


function App() {
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSerachRepo = async () => {
    const {data} = await api.get(`repos/${inputValue}`);
    console.log(data);
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setInputValue('');
      }
    }
  }

  const handleRemoveRepo = (id) => {
    console.log(id);
    setRepos(repos.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <img src={Logo} width={72} height={72} alt="github logo"/>
      <Input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      <Button onClick={handleSerachRepo}/>
      {repos.map(repo => <ItensRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
