import './styles.css';

export function Button({handleCatDate}){
    return(
        <>
            <button type='button' onClick={handleCatDate}>Buscar</button>
        </>
    );
}