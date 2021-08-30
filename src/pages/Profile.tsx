import React, { useState } from "react";
import {FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import avatar from '../assets/avatar.jpg'
import { db, storage } from "../firebase/config";
import {
    MainContent,
    Container,
    CardHeader,
    Wrapper,

} from "../styles/pages/generalStyles";
import { CardContent, ContentWrapper, ProfileStudante, CardInformation } from "../styles/pages/ProfileStyles";
import { Button } from "../components/Button";

const Profile = () => {
    return (
        <MainContent>
            <Container>
                <CardHeader
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>
                        <h2>Perfil do estudante</h2>
                    </div>
                </CardHeader>
                <Wrapper>

                    <CardContent>

                        <ProfileStudante>
                            <div className="profile-avatar">
                                <div className="avatar"><img src={avatar} /></div>
                                <div className="profile-name"><h3>Nome do estudante</h3></div>
                            </div>
                            <div className="info-estudent">
                                <form>
                                    <li>
                                        <strong>Email</strong><span>kambaiaalberto@gmail.com</span>
                                    </li>
                                    <li>
                                        <strong>Nº de telefone</strong><span><input type="email" value="944969856" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                    </li>
                                    <li>
                                        <strong>Nº de estudante</strong><span><input type="email" value="201273" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                    </li>
                                    <li>
                                        <strong>Ano: </strong><span><input type="email" value="2020" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                    </li>
                                    <li>
                                        <strong>Turma</strong><span><input type="email" value="ENF-M1" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                    </li>
                                    <div className="btn-update"><Button disabled={true}>Actualizar</Button></div>

                                </form>
                            </div>


                        </ProfileStudante>
                        <ContentWrapper>

                            <CardInformation>
                                <form>
                                    <div className="header-info"><h2>Informação academica do estudante</h2></div>
                                    <div className="body-info">
                                        <li>
                                            <strong>Universidade</strong><span><input type="email" value="Isptec" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                        </li>
                                        <li>
                                            <strong>Curso de </strong><span><input type="text" value="Engenhiria Informatica" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                        </li>
                                        <li>
                                            <strong>Ano de inicio </strong><span><input type="text" value="2020" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                        </li>
                                        <li>
                                            <strong>Ano atual </strong><span><input type="text" value="2021" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                        </li>
                                    </div>
                                    <div className="btn-update"><Button disabled={true}>Actualizar</Button></div>
                                </form>
                            </CardInformation>
                            <CardInformation>
                                <form>
                                    <div className="header-info"><h2>Informaçães da morda</h2></div>
                                    <div className="body-info">
                                        <li>
                                            <strong>Provincia</strong><span><input type="text" value="Luanda" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                        </li>
                                        <li>
                                            <strong>Município</strong><span><input type="text" value="Talatona" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                        </li>
                                        <li>
                                            <strong>Bairro</strong><span><input type="text" value="Benfica" disabled={true} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                        </li>

                                    </div>
                                    <div className="btn-update"><Button disabled={true}>Actualizar</Button></div>
                                </form>
                            </CardInformation>




                        </ContentWrapper>
                    </CardContent>
                </Wrapper>
            </Container>
        </MainContent>
    );
};

export default Profile;
