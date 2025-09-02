import { ButtonContainer } from "./styles";
import type { IButton } from "./types";

const Button = ({ title, variant = "primary", onClick }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
