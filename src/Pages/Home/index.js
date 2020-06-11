import React from 'react';
import { Container, Content, Listas, Button } from './styles'
import Header from '../../Components/Header'
import Lista from '../../Components/Lista'
function Home() {
  return (
    <Container>
      <Header />
      <Content>
      <Button>Nova Lista</Button>
        <Listas>
          <Lista />
          <Lista />
          <Lista />
          <Lista />
          <Lista />
          <Lista />
        </Listas>

      </Content>
    </Container>
  );
}

export default Home;
