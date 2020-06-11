import React from 'react';
import {Container, Card, Title, Input, Button, Form} from './styles'

function Home() {
  return (
    <Container>
        <Card>
           <Title>Minha lista Compartilhada</Title> 
           <Form>
            <Input placeholder="Login"/>
            <Input placeholder="Senha"/>
            <Button color="#FFFFFF" background="#006837">Login</Button>
            <Button color="#272727" background="#FFD600">Cadastrar</Button>
           </Form>
        </Card>
    </Container>
  );
}

export default Home;
