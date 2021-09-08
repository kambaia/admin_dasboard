import React, { useState } from "react";
import { FullContainer } from "../styles/pages/home";
import { BiBookReader } from "react-icons/bi";
import bainner from "../assets/bainner.svg";
import { Link } from "react-router-dom";
import { db, storage } from "../firebase/config";
import { FaYoutube } from "react-icons/fa";
import { FiLink2, FiUpload } from "react-icons/fi";
import {
  MainContent,
  Container,
  CardHeader,
  Wrapper,
} from "../styles/pages/generalStyles";
import CardTeamClass from "../components/CardTeamClass";
import CardMyQuestion from "../components/CardMyQuestion";
import { CardTeams, CardMyQuestions, ContentAddQuestions } from "../styles/pages/ClassRoomStyles";
import { Button } from "../components/Button";
import { useEffect } from "react";
import { getOnlyMyQuestion, getQuestion,addQuestion } from "../services/classRoomServer";
import { getUserProfile } from "../utils";
import { QuestionTypes } from "../types/quesionTypes";

import { Modal } from "../components/Modal/ModalAlert";
const ClassRoom = () => {
  const [question, setQuestion] = useState<any>();
  const [myQuestion, setMyQuestion] = useState<any>()
  const [formQ, setFormQ] = useState<QuestionTypes>({
    idUser: '',
     question:"",
     about:'',
     avatar:'',
     author:'',
     creatAt: new Date(),
    })

  useEffect(() => {
    allQuestion();
    allMyQuestion();
  }, [])

  const allQuestion = async () => {
    const data: any = await getQuestion(getUserProfile()?.uid);
    if (data) {
      console.log(data)
      setQuestion(data)
    }
  }
  const allMyQuestion = async () => {
    const data: any = await getOnlyMyQuestion(getUserProfile()?.uid);
    if (data) {
      setMyQuestion(data)
      console.log("Há nenhum dado desposivel")
    } else {
      console.log("Não há nenhum dado desposivel")
    }
  }


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
}


  return (
    <>
      <MainContent>
        <Container>
          <CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h2>Todas as salas disponíveis</h2>
            </div>
            <Button><Link to="/room">Criar a sua sala</Link></Button>

          </CardHeader>
          <Wrapper>
            <CardTeams>
              <div className="teams">
                {
                  question?.map((item: any, index: number) =>
                    <CardTeamClass key={index} items={item} />

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
                  myQuestion?.map((item: any, index: number) =>
                    <CardMyQuestion items={item} />
                  )
                }
              </div>
            </CardMyQuestions>
          </Wrapper>
        </Container>
      </MainContent>
      <Modal>
        <ContentAddQuestions>
        <section id="section-home">
          <div className="header-questions">
            <h2>Faça aqui a questão para debateres com o pessoal</h2>
            <div className="form-questions">
              <form onSubmit={onSubmitQuestion}>
                <label htmlFor="" className="sr-only">
                  Selecione o questão
                </label>
                <select onChange={(e) => setFormQ({ ...formQ, about: e.target.value })}>
                  <option>Questão Relacionada com?</option>
                  <option>Matemática</option>
                  <option>Física</option>
                  <option>Programação</option>
                  <option>Lingua Portuguesa</option>
                  <option>Inglês</option>
                  <option>Francês</option>
                  <option>Direito</option>
                  <option>Economia</option>
                  <option>Outros sabres</option>


                </select>

                <label htmlFor="" className="sr-only">
                  O que é a questão número 1
                </label>
                <textarea placeholder="Digite aqui a questão do grupo em questão" onChange={(e) => setFormQ({ ...formQ, question: e.target.value })}></textarea>
                <footer>
                  <div className="btn-question">
                    <span>...</span>
                    <Button onSubmit={onSubmitQuestion}>Atribuir o desafio</Button>
                  </div>
                </footer>
              </form>
            </div>
            <div className="question-footer">
              <div>
                <span><FiUpload /></span>
              </div>
              <div>
                <span><FaYoutube /></span>
              </div>
              <div>
                <span><FiLink2 /></span>
              </div>
            </div>
          </div>
        </section>
        </ContentAddQuestions>
      </Modal>
   
    </>
  );
};

export default ClassRoom;
