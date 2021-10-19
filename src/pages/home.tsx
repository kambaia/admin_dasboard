import React, { useState } from 'react';
import { FullContainer } from '../styles/pages/home';
import { BiBookReader} from 'react-icons/bi';
import bainner from '../assets/bainner.svg';
import { Link } from 'react-router-dom';
import { db} from '../firebase/config';
import { MainContent, Container, CardHeader, Wrapper} from '../styles/pages/generalStyles';

const Home = () => {
  return (
    <MainContent>
    <Container>
      <CardHeader>
        <h2>Seja bem vindo a sua sala</h2>
      </CardHeader>
      <Wrapper>
      </Wrapper>
    </Container>
  </MainContent>

  )
}

export default Home;

