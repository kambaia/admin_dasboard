import React, { FC, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { Container } from "./styles";
import { IoMdSend} from "react-icons/io";
import { QuestionTypes } from "../../types/quesionTypes";
import { getUserProfile } from "../../utils";

interface MyQuestion {
    items: QuestionTypes,
    setMessageSend?: (newValue: string) => void;
    sendAnswer: ()=>void,
    messageSend: string
}

const Answers: FC<MyQuestion> = (props: MyQuestion) => {
    const user = getUserProfile();
    const { setMessageSend, sendAnswer, messageSend, items} = props;
    return (
        <>
            <Container>
                <div className="header">
                    <div className="info-team">
                        <h2>{items?.author}</h2>
                        <strong>{items?.question}</strong>
                        <p>{'20/08/2021'}</p>
                    </div>
                    <div className="img-team">
                        <div className="avatar">
                            <span><img src={items?.avatar!} /></span>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="team-status">
                        <div className="avatar"><img src={user?.photoURL!}/></div>
                    </div>
                    <div className="info-footer-team">
                        <div className="send-message">
                            <textarea placeholder="Resposter para turma" value={messageSend} onChange={(e)=>{
                            if(setMessageSend){
                                setMessageSend(e.target.value);
                            }
                        }}
                        />
                         <span className="send" onClick={sendAnswer}> <IoMdSend size={25}/></span>
                        </div>
                    </div>
                </div>
                ´
            </Container>

        </>
    );
};

export default Answers;
