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
import CardMyQuestion from "../components/CardMyQuestion";
import { CardTeams, CardMyQuestions } from "../styles/pages/ClassRoomStyles";
import { Button } from "../components/Button";
import { useEffect } from "react";
import { getOnlyMyQuestion, getQuestion } from "../services/classRoomServer";
import { getUserProfile } from "../utils";
import { Question } from "../types/quesionTypes";
const ClassRoom = () => {
      const [question, setQuestion] = useState<any>();
      const [myQuestion, setMyQuestion] = useState<any>()
    
   useEffect(()=>{
    allQuestion();
    allMyQuestion();
   },[])
 
   const allQuestion= async()=>{
      const data: any = await getQuestion(getUserProfile()?.uid);
      if(data){
        console.log(data)
        setQuestion(data)
      }
   }
   const allMyQuestion= async()=>{
    const data: any = await getOnlyMyQuestion(getUserProfile()?.uid);
    if(data){
      setMyQuestion(data)
        console.log("Há nenhum dado desposivel")
    }else{
      console.log("Não há nenhum dado desposivel")
    }
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
            {
                    question?.map((item:any, index:number)=>
                    <CardTeamClass key={index} items={item}/>
                    
                    )
                  }
            </div>
          </CardTeams>
       
        </Wrapper>
          
        <Wrapper>
             <div>
                  <h2>Perguntas recentes feitas por mim</h2>
             </div>
        </Wrapper>
        <Wrapper>
            <CardMyQuestions>
            <div className="my-question">
                  {
                    myQuestion?.map((item:any, index:number)=>
                    <CardMyQuestion items={item}/>
                    )
                  }
             </div>
            </CardMyQuestions>
        </Wrapper>
      </Container>
    </MainContent>
  );
};

export default ClassRoom;
