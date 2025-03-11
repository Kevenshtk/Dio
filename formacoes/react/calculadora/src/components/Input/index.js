import { InputContainer } from './styles.js';

export default function Input({value}){
    return(
        <InputContainer>
            <input disabled value={value}/>
        </InputContainer>
    )
}