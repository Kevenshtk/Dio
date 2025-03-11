import { ButtonContainer } from './styles.js';

export default function Button({label, onClick}){
    return(
        <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
    )
}