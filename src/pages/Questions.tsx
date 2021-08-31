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

const Questions = () => {
    return (
        <MainContent>
            <Container>
                <CardHeader
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>
                        <h2>Algumas perguntas quem podem ajudar você</h2>
                    </div>
                    <Button>Criar a sua sala</Button>
                </CardHeader>
                <Wrapper>
               
               
               
               
               
                </Wrapper>
            </Container>
        </MainContent >
    );
};

export default Questions;
