import { Button } from "@chakra-ui/react";
import { login } from '../services/login';

export const Botao = () => {
  return (
    <Button onClick={(event) => login('Pablo')} color='#FFFFFF' bg='#E4105D' size='sm' width='100%' marginTop='5px'>
                Entrar
    </Button>
  )
}




