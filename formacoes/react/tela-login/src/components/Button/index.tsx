import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, className, onClick }: IButtonProps) => {
  return <ButtonContainer className={className} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
