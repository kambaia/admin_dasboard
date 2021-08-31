import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

import {FaFilePdf} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
    MainContent,
    Container,
    CardHeader,
    Wrapper
} from "../styles/pages/generalStyles";
import {ListOfExercises} from "../styles/pages/listStyles";
import { Button } from "../components/Button";

const ListExercise = () => {
    return (
        <MainContent>
            <Container>
                <CardHeader
                    style={{ display: "flex", justifyContent: "space-between" }}
                >



                    <div>
                        <h2>Exercícios de matemática basíca</h2>
                    </div>
                    <Button>Criar a sua sala</Button>
                </CardHeader>
                <Wrapper>
                   <ListOfExercises>
                        <div className="icon">
                            <div className="icon-exercise">
                                <FaFilePdf color="#ddd" size={20}/>
                            </div>
                        </div>
                        <div className="title-exercises">
                            <p>Lista 1</p>
                        </div>
                        <div className="icon-oction">
                            <p><FiMoreVertical/></p>
                        </div>
                        
                   </ListOfExercises>

                   <ListOfExercises>
                        <div className="icon">
                            <div className="icon-exercise">
                                <FaFilePdf color="#ddd" size={20}/>
                            </div>
                        </div>
                        <div className="title-exercises">
                            <p>Lista 2</p>
                        </div>
                        <div className="icon-oction">
                            <p><FiMoreVertical/></p>
                        </div>
                        
                   </ListOfExercises>

                   <ListOfExercises>
                        <div className="icon">
                            <div className="icon-exercise">
                                <FaFilePdf color="#ddd" size={20}/>
                            </div>
                        </div>
                        <div className="title-exercises">
                            <p>Lista 3</p>
                        </div>
                        <div className="icon-oction">
                            <p><FiMoreVertical/></p>
                        </div>
                        
                   </ListOfExercises>

                   <ListOfExercises>
                        <div className="icon">
                            <div className="icon-exercise">
                                <FaFilePdf color="#ddd" size={20}/>
                            </div>
                        </div>
                        <div className="title-exercises">
                            <p>Lista 4</p>
                        </div>
                        <div className="icon-oction">
                            <p><FiMoreVertical/></p>
                        </div>
                        
                   </ListOfExercises>

                   <ListOfExercises>
                        <div className="icon">
                            <div className="icon-exercise">
                                <FaFilePdf color="#ddd" size={20}/>
                            </div>
                        </div>
                        <div className="title-exercises">
                            <p>Lista 5</p>
                        </div>
                        <div className="icon-oction">
                            <p><FiMoreVertical/></p>
                        </div>
                        
                   </ListOfExercises>
                   <ListOfExercises>
                        <div className="icon">
                            <div className="icon-exercise">
                                <FaFilePdf color="#ddd" size={20}/>
                            </div>
                        </div>
                        <div className="title-exercises">
                            <p>Lista 6</p>
                        </div>
                        <div className="icon-oction">
                            <p><FiMoreVertical /></p>
                        </div>
                        
                   </ListOfExercises>
                   <ListOfExercises>
                        <div className="icon">
                            <div className="icon-exercise">
                                <FaFilePdf color="#ddd" size={20}/>
                            </div>
                        </div>
                        <div className="title-exercises">
                            <p>Lista 7</p>
                        </div>
                        <div className="icon-oction">
                            <p><FiMoreVertical /></p>
                        </div>
                        
                   </ListOfExercises>
                   <ListOfExercises>
                        <div className="icon">
                            <div className="icon-exercise">
                                <FaFilePdf color="#ddd" size={20}/>
                            </div>
                        </div>
                        <div className="title-exercises">
                            <p>Lista 8</p>
                        </div>
                        <div className="icon-oction">
                            <p><FiMoreVertical /></p>
                        </div>
                        
                   </ListOfExercises>
                </Wrapper>
            </Container>
        </MainContent >
    );
};

export default ListExercise;
