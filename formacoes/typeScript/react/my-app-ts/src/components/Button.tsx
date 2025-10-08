import * as Chakra from "@chakra-ui/react";

interface IButton {
    onClick: () => void,
    text: string,
}

export const Button = ({ onClick, text }: IButton) => {
  return (
    <Chakra.Button onClick={onClick} colorScheme="teal" size="md">
      {text}
    </Chakra.Button>
  );
};
