import React, { useState } from "react";
import { FullContainer } from "../styles/pages/home";
import { BiBookReader } from "react-icons/bi";
import bainner from "../assets/bainner.svg";
import { Link } from "react-router-dom";
import { db, storage } from "../firebase/config";
import {
  MainContent,
  Container,
  CardHeader,
  Wrapper,
} from "../styles/pages/generalStyles";
import CardTeamClass from "../components/CardTeamClass";
import { CardTeams } from "../styles/pages/ClassRoomStyles";
import { Button } from "../components/Button";
import { useEffect } from "react";
import { getQuestion } from "../services/classRoomServer";
import { getUserProfile } from "../utils";

const ClassRoom = () => {
   useEffect(()=>{
    allQuestion();
   })

   const allQuestion= async()=>{
      const res: any = await getQuestion(getUserProfile()?.uid);
      console.log(res)
   }
  return (
    <MainContent>
      <Container>
        <CardHeader style={{display:'flex', justifyContent:'space-between'}}>
           <div>
           <h2>Todas as salas disponíveis</h2>
           </div>
             <Button><Link to="/room">Criar a sua sala</Link></Button>
           
        </CardHeader>
        <Wrapper>
          <CardTeams>
            <div className="teams">
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
              <CardTeamClass />
            </div>
          </CardTeams>
       
        </Wrapper>
          
        <Wrapper>
             <div>
                  <h2>Perguntas recentes feitas por mim</h2>
             </div>
        </Wrapper>
        <Wrapper>
             <div>
             <CardTeamClass />
             </div>
        </Wrapper>
      </Container>
    </MainContent>
  );
};

export default ClassRoom;
