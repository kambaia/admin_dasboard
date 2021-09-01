import React, { useState, useEffect } from "react";
import { FullContainer } from "../styles/pages/home";
import { BiBookReader } from "react-icons/bi";
import bainner from "../assets/bainner.svg";
import { Link, useParams } from "react-router-dom";
import {
  MainContent,
  Container,
  CardHeader,
  Wrapper,
} from "../styles/pages/generalStyles";

import { Button } from "../components/Button";

import { detailsQuestion } from "../services/classRoomServer";
import { getUserProfile } from "../utils";
import { Question } from "../types/quesionTypes";

type ParametsId= {
  id: string
}
const ClassRoom = () => {
      const [question, setQuestion] = useState<any>();
      const questionId:ParametsId = useParams();
      useEffect(()=>{
        answerQuestion();
      },[])
   const answerQuestion= async()=>{
      const data: any = await detailsQuestion(questionId.id);
   }
  
  return (
    <MainContent>
      <Container>
        <CardHeader style={{display:'flex', justifyContent:'space-between'}}>
           <div>
           <h2>Questão</h2>
           </div>
             <Button><Link to="/room">Criar a sua sala</Link></Button>
        </CardHeader>
        <Wrapper>
         
       
        </Wrapper>
       
      </Container>
    </MainContent>
  );
};

export default ClassRoom;
