import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ItemList } from "../../components/ItemList";
import background from "../../assets/background.png";
import { useState } from 'react';
import './styles.css';

function App() {
  const[user, setUser] = useState('');
  const[correntUser, setCorrentUser] = useState(null);
  const[repos, setRepos] = useState(null);

  async function handleCatDate(){
    const userDate = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userDate.json();
    console.log(newUser)

    if(newUser.name){
      const {avatar_url, name, login} = newUser;
      setCorrentUser({avatar_url, name, login});

      const repoDate = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await repoDate.json();

      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  }

    return (
        <div className="App">
            <Header />
            <div className="conteudo">
              <img className="background" src={background} alt="background app"/>
              <div className="info">
                <div>
                  <Input value={user} pegarUser={setUser}/>
                  <Button handleCatDate={handleCatDate}/>
                </div>
                {correntUser?.name ? (
                  <>
                  <div className="perfil">
                    <img className="profile" src={correntUser.avatar_url} alt="imagem profile"/>
                    <div>
                      <h3>{correntUser.name}</h3>
                      <span>@{correntUser.login}</span>
                    </div>
                  </div>
                  <hr/>
                  </>
                ) : null}

                {repos?.length ? (
                  <div className="list-repositorio">
                    <h4>Repositórios</h4>
                    {repos.map(
                      (repo) => <ItemList title={repo.name} description={repo.description}/>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
        </div>
    );
}

export default App;
