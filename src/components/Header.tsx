import { Box, Flex, Spacer, Heading, Image } from "@chakra-ui/react";
import logo from '../assets/logo-dio.png';


export const Header = () => {
  return (
    <Flex bg="#151515" py={4} px={8} alignItems="center">
      <Image src={logo} />
      <Heading as="h1" size="2xl" color="#24A0EF" fontWeight="bold">
        Bank
      </Heading>
      <Spacer />
      <Box>
        {/* Aqui você pode adicionar outros componentes, como um botão de login */}
      </Box>
    </Flex>
  );
}


