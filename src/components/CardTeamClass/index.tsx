import React, { FC, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { Container } from "./styles";
import { FaUsers, FaUser, FaFolder } from "react-icons/fa";
import { Question } from "../../types/quesionTypes";


interface Questions {
    items?: {
        idUser:string | null | undefined,
        author?: string | null | undefined,
        avatar?: string | null | undefined,
        about: string,
        question: string,
        validate?: [],
        validateMaster?:[],
        creatAt:any  
    },
}

const CardTeamClass: FC<Questions> = (props: Questions) => {
    return (
        <>
            <Container>
                <Link to="#">
                    <div className="header">
                        <div className="info-team">
                            <h2>{props.items?.about}</h2>
                            <p>{props.items?.question}</p>
                            <p>{props.items?.author}</p>
                        </div>
                        <div className="img-team">
                            <div className="avatar">
                                <span><img src={props.items?.avatar!}/></span>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="team-status">
                            <div></div>
                        </div>
                        <div className="info-footer-team">
                            <div><FaUsers color="#333" /></div>
                            <div><FaFolder color="#333" /></div>
                        </div>
                    </div>
                </Link>
            </Container>

        </>
    );
};

export default CardTeamClass;
