import { 
  Box,
  Center,
  ChakraProvider, 
  Input
 } from '@chakra-ui/react';
import { Botao } from './Botao';

export const Card = () => {
  return (
    <ChakraProvider>
        <Box minHeight='100vh' bg='#1E192C' padding='25px'>       
          <Box bg='#FFFFFF' borderRadius='25px' padding='15px'>
            <Center>
              <h1>Faça login</h1>
            </Center>
            <Input placeholder="Email" />
            <Input placeholder="Senha" /> 
            <Center>
              <Botao />
            </Center>
          </Box>         
        </Box>     
      </ChakraProvider>
  )
}

