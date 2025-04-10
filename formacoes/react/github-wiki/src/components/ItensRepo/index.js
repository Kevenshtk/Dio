
import { ItemContainer } from "./styles.js";

function ItensRepo({repo, handleRemoveRepo}){

    const hadleRemove = () => {
        handleRemoveRepo(repo.id)
    }

    return(
        <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank" rel="noreferrer">Ver repositório</a> <br/>
        <a className="remover" href="#" onClick={hadleRemove}>Remover</a>
        <hr/>
        </ItemContainer>
    )
}

export default ItensRepo;