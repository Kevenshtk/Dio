import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}


const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box backgroundColor="white" minHeight="120px" p={8} borderRadius={25}>
        <Text fontSize='2xl' fontWeight={600}>{mainContent}</Text>
        <Text fontSize='xl'>{content}</Text>
    </Box>
  );
};

export default CardInfo;
