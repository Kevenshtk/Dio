import * as Chakra from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IButton {
    onClick: MouseEventHandler,
    text: string,
}

export const Button = ({ onClick, text }: IButton) => {
  return (
    <Chakra.Button onClick={onClick} colorScheme="teal" size="md">
      {text}
    </Chakra.Button>
  );
};
