import React from 'react';
import {Container, Card, Title, Input, Button, Form} from './styles'
import Header from '../../Components/Header'
import Lista from '../../Components/Lista'
function Home() {
  return (
    <Container>
        <Header/>
        <Lista/>
    </Container>
  );
}

export default Home;
