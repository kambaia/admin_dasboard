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
import { CardTeams, CardMyQuetions } from "../styles/pages/ClassRoomStyles";
import { Button } from "../components/Button";
import { useEffect } from "react";
import { getQuestion } from "../services/classRoomServer";
import { getUserProfile } from "../utils";
import { Question } from "../types/quesionTypes";
const ClassRoom = () => {
      const [question, setQuestion] = useState<any>()
    
   useEffect(()=>{
    allQuestion();
   },[])
 
   const allQuestion= async()=>{
      const data: any = await getQuestion(getUserProfile()?.uid);
      if(data){
        setQuestion(data)
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
           {console.log(question)}
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
            <CardMyQuetions>
            <div className="my-question">
                  {
                    question?.map((item:any, index:number)=>
                    <CardTeamClass items={item}/>
                    
                    )
                  }
             </div>
            </CardMyQuetions>
        </Wrapper>
      </Container>
    </MainContent>
  );
};

export default ClassRoom;
