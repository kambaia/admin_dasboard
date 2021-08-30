import React, { FC, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { Container } from "./styles";
import { FaUsers, FaUser, FaFolder } from "react-icons/fa";
const CardTeamClass: FC = () => {

    return (
        <>
            <Container>
                <Link to="#">
                    <div className="header">
                        <div className="info-team">
                            <h2>Fisica geral 1</h2>
                            <p>Materias relacionada ao 2 ano</p>
                            <p>Kambaia Alberto</p>
                        </div>
                        <div className="img-team">
                            <div className="avatar">
                                <span><FaUser size={30} /></span>
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
