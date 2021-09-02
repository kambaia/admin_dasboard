import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaUserCircle, FaHandLizard } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'


import {
  MainContent,
  Container,
  CardHeader,
  Wrapper,
} from "../styles/pages/generalStyles";
import { CadAnswer } from '../styles/pages/questionAnswerStyles'
import { detailsQuestion, answerAddQuestion, allAnswerQuestion, answerAddCommentting, allAnswerCommits } from "../services/classRoomServer";
import { getUserProfile } from "../utils";
import { AnswersTypes, CommentsTypes } from "../types/quesionTypes";
import Answers from "../components/Answers";
import { IoMdSend } from "react-icons/io";


type ParametsId = {
  id: string
}
type ActionAnswer = {
  right: boolean,
  almost: boolean,
  comment: boolean,
  commitRef: number,
  commentId: string

}
const ClassRoom = () => {
  const [messageSend, setMessageSend] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [question, setQuestion] = useState<any>();
  const [answer, setAnswer] = useState<any>();
  const [action, setAction] = useState<ActionAnswer>({
    right: false, almost: false, comment: false, commitRef: -1,
    commentId: ''
  })
  const questionId: ParametsId = useParams();

  const user = getUserProfile();
  useEffect(() => {
    getAllAnswer();
    answerQuestion();
  }, [])
  const answerQuestion = async () => {
    const data: any = await detailsQuestion(questionId.id);
    setQuestion(data);
  }

  const sendAnswer = async () => {
    const answer: AnswersTypes = {
      answer: messageSend,
      user: user?.uid,
      userName: user?.displayName,
      creatAt: new Date()
    }
    const res: any = await answerAddQuestion(questionId.id, answer);
    if (res?.addmessa) {
      answerQuestion();
      setMessageSend('');
    }
  }

  const sendComment = async () => {
    const comments: CommentsTypes = {
      comment: comment,
      user: user?.uid,
      userName: user?.displayName,
      creatAt: new Date(),
      id: action.commentId
    }

    const res: any = await answerAddCommentting(questionId.id, action.commentId, comments);
    if (res?.addmessa) {
      answerQuestion();
      setMessageSend('');
    }

  }

  const getAllAnswer = async () => {
    const data: any = await allAnswerQuestion(questionId.id);
    setAnswer(data)
  }

  const getAllCommints = async (id:string) => {
    const data: any = await allAnswerCommits(questionId.id, id);
    setAnswer(data)
  }

  const onCommentting = (index: number, idAnswer: any) => {
    setAction({ ...action, comment: true, commitRef: index, commentId: idAnswer });

  }

  const onSeeCommintting = (index: any) => {
    getAllCommints(index);

  }
  

  return (
    <MainContent>
      <Container>
        <CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h2>Questaão relacionada com {question?.about}</h2>
          </div>
        </CardHeader>
        <Wrapper>
          <Answers items={question} messageSend={messageSend} setMessageSend={setMessageSend} sendAnswer={sendAnswer} />
        </Wrapper>

        <Wrapper>
          <CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h2>Resposta da classes</h2>
            </div>
          </CardHeader>
          {
            answer?.map((item: AnswersTypes, index: number) => (
              <CadAnswer key={index}>
                <div className="user-header">
                  <span><FaUserCircle /></span>
                  <h3>{item.userName}</h3>
                  <div>
                     <p onClick={ ()=>onSeeCommintting(item?.id)}>Ver</p>
                  </div>
                </div>
                <div className="anwser">
                  <p>{item.answer}</p>
                </div>
               

                <div className="footer-anwser">
                  <div className="incon-option">
                    <span><FaStar />Certissimo</span>
                    <span><FaHandLizard />Quase lá</span>
                    <span onClick={() => onCommentting(index, item?.id)}><FiMessageCircle />Comentar</span>
                  </div>
                  <div className="send-message" style={{ display: action.comment && index === action.commitRef ? 'flex' : 'none' }}>
                    <textarea placeholder="Digite aqui o seu contributo " onChange={(e) => setComment(e.target.value)}></textarea>
                    <span className="send" onClick={sendComment}> <IoMdSend size={25} /></span>
                  </div>
                  


                  {
                    /*colondo aqui os comentarios*/
                  }
                </div>
              </CadAnswer>
            ))
          }


        </Wrapper>

      </Container>
    </MainContent>
  );
};

export default ClassRoom;
