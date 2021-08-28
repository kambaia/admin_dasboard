import React, { useState } from 'react';
import { FullContainer } from '../styles/pages/home'
import { Container } from '../styles/pages/responsive/home'
import { BiBookReader} from 'react-icons/bi'
import bainner from '../assets/bainner.svg';
import { Link } from 'react-router-dom';
import { db, storage} from '../firebase/config'

const Home = () => {
  console.log(storage.ref)
  return (
    <FullContainer>
      <Container>
          <div>
           
              <img src={bainner}/>
          </div>
      </Container>
    </FullContainer >


  )
}

export default Home;

