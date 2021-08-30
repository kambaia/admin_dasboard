import React, { useState } from "react";
import { FullContainer } from "../styles/pages/home";
import { FaYoutube } from "react-icons/fa";
import { FiLink2, FiUpload } from "react-icons/fi";
import bainner from "../assets/bainner.svg";
import { Link } from "react-router-dom";
import { db, storage } from "../firebase/config";
import {
  MainContent,
  Container,
  CardHeader,
  Wrapper,
} from "../styles/pages/generalStyles";
import { CardChat, CardForm } from "../styles/pages/RoomStyles";
import { Button } from "../components/Button";

const Room = () => {
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
            <form>
              <div className="question">
                <section id="section-home">
                  <div className="header-questions">
                    <h2>Faça aqui a questão para debateres com o pessoal</h2>
                    <div className="form-questions">
                      <form>
                        <label htmlFor="" className="sr-only">
                          Selecione o questão
                        </label>
                        <select>
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
                        <textarea placeholder="Digite aqui a questão do grupo em questão"></textarea>
                        
                        <footer>
                          <div className="btn-question">
                            <span>...</span>
                            <Button>Atribuir o desafio</Button>
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
              </div>
            </form>
          </CardForm>
        </Wrapper>
      </Container>
    </MainContent>
  );
};

export default Room;
