import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSunset } from "react-icons/fi";

import { FaRemoveFormat, FaStar, FaReact, FaLaravel, FaCuttlefish, FaJava} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
    MainContent,
    Container,
    CardHeader,
    Wrapper
} from "../styles/pages/generalStyles";
import { SessionExercise } from "../styles/pages/exerciseStyles";
import { Button } from "../components/Button";

const Exercises = () => {
    return (
        <MainContent>
            <Container>
                <CardHeader
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>
                        <h2>Lista de exercícios</h2>
                    </div>
                    <Button>Criar a sua sala</Button>
                </CardHeader>
                <Wrapper>
                    <SessionExercise>
                        <h2>Sessão de matemática</h2>
                        <div className="roll">
                            <span><FiChevronLeft /></span>
                            <span><FiChevronRight /></span>
                        </div>
                        <div className="session-card">
                            <Link to="/exercises/list">
                            <div className="exercise">
                                <div className="card-exec">
                                    <span><FaRemoveFormat /></span>
                                     <h3>29328</h3>
                                </div>
                                <div className="name-exec">
                                    <span>Exercícios de matemática basíca</span>
                                </div>
                                <div>
                                <div className="classification">
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                </div>
                            </div>
                            </div>
                            </Link>
                            <div className="exercise">
                                <div className="card-exec">
                                    <span><FaRemoveFormat /></span>
                                     <h3>8</h3>
                                </div>
                                <div className="name-exec">
                                    <span>Exercicios de integral calculo 2</span>
                                </div>
                                <div>
                                <div className="classification">
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                </div>
                            </div>
                            </div>
                        </div>


                        

               
                    </SessionExercise>
                    <SessionExercise>
                        <h2>Fisíca geral</h2>
                        <div className="roll">
                            <span><FiChevronLeft /></span>
                            <span><FiChevronRight /></span>
                        </div>
                        <div className="session-card">
                            <div className="exercise">
                                <div className="card-exec">
                                    <span><FiSunset /></span>
                                     <h3>28</h3>
                                </div>
                                <div className="name-exec">
                                    <span>Exercícios de queda livre</span>
                                </div>
                                <div>
                                <div className="classification">
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                </div>
                            </div>
                            </div>
                            <div className="exercise">
                                <div className="card-exec">
                                <span><FiSunset /></span>
                                     <h3>17</h3>
                                </div>
                                <div className="name-exec">
                                    <span>Exercicios de Vectores</span>
                                </div>
                                <div>
                                <div className="classification">
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SessionExercise>
                    <SessionExercise>
                        <h2>Programação web</h2>
                        <div className="roll">
                            <span><FiChevronLeft /></span>
                            <span><FiChevronRight /></span>
                        </div>
                        <div className="session-card">
                            <div className="exercise">
                                <div className="card-exec">
                                    <span><FaReact /></span>
                                     <h3>28</h3>
                                </div>
                                <div className="name-exec">
                                    <span>Exercícios de queda livre</span>
                                </div>
                                <div>
                                <div className="classification">
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                </div>
                            </div>
                            </div>
                            <div className="exercise">
                                <div className="card-exec">
                                <span><FaLaravel /></span>
                                     <h3>17</h3>
                                </div>
                                <div className="name-exec">
                                    <span>Exercicios de Vectores</span>
                                </div>
                                <div>
                                <div className="classification">
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SessionExercise>

                    <SessionExercise>
                        <h2>Programação Back-end</h2>
                        <div className="roll">
                            <span><FiChevronLeft /></span>
                            <span><FiChevronRight /></span>
                        </div>
                        <div className="session-card">
                            <div className="exercise">
                                <div className="card-exec">
                                    <span><FaCuttlefish /></span>
                                     <h3>28</h3>
                                </div>
                                <div className="name-exec">
                                    <span>Exercícios de queda livre</span>
                                </div>
                                <div>
                                <div className="classification">
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                </div>
                            </div>
                            </div>
                            <div className="exercise">
                                <div className="card-exec">
                                <span><FaJava /></span>
                                     <h3>288</h3>
                                </div>
                                <div className="name-exec">
                                    <span>Exercicios de Vectores</span>
                                </div>
                                <div>
                                <div className="classification">
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                    <span><FaStar></FaStar></span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SessionExercise>
               
               
               
               
               
                </Wrapper>
            </Container>
        </MainContent >
    );
};

export default Exercises;
