import React, { useState } from "react";
import { FullContainer } from "../styles/pages/home";
import { FaYoutube } from "react-icons/fa";
import { FiLink2, FiUpload } from "react-icons/fi";
import bainner from "../assets/bainner.svg";
import { Link, useHistory } from "react-router-dom";
import { db, storage } from "../firebase/config";
import {
  MainContent,
  Container,
  CardHeader,
  Wrapper,
} from "../styles/pages/generalStyles";
import { CardChat, CardForm } from "../styles/pages/RoomStyles";
import { Button } from "../components/Button";
import { addQuestion, getQuestion } from "../services/classRoomServer";
import { getUserProfile } from "../utils";
import { QuestionTypes } from "../types/quesionTypes";

const Room = () => {
  const history = useHistory();
  const [formQ, setFormQ] = useState<QuestionTypes>({
  idUser: '',
   question:"",
   about:'',
   avatar:'',
   author:'',
   creatAt: new Date(),
  })
  const onSubmitQuestion = async(e:any)=>{
    e.preventDefault();
    const questionData:QuestionTypes = {
      author: getUserProfile()?.displayName,
      avatar: getUserProfile()?.photoURL,
      about: formQ?.about,
      question:formQ?.question,
      idUser: getUserProfile()?.uid,
      creatAt: new Date(),
      }
      const res= await addQuestion(getUserProfile()?.uid, questionData);
      history.push("/classroom");
}
  return (
    <MainContent>
      <Container>
        <CardHeader
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h2>Criação de salas de de interação com outros membros</h2>
          </div>
          <Button>Criar a sua sala</Button>
        </CardHeader>
        <Wrapper>
          <CardForm>
         
              <div className="question">
                
              </div>
          
          </CardForm>
        </Wrapper>
      </Container>
    </MainContent>
  );
};

export default Room;
