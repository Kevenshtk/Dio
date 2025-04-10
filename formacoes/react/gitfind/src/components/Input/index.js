import './styles.css';

export function Input({pegarUser, user}){
    return(
        <>
            <input type="text" name="usuario" 
            onChange={(event) => pegarUser(event.target.value)} 
            value={user} placeholder="@username"/>
        </>
    );
}