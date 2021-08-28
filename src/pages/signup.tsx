import React, { useEffect, useState} from "react";
import logo from "../assets/logo.png";
import { Link, useHistory} from 'react-router-dom'
import { Container } from "../styles/pages/registerStyles";
import bainner from '../assets/registraBainner.svg';
import { Button } from "../components/Button";
import { auth, db} from '../firebase/config';
const SignUp = () => {
  const history = useHistory();
  const [loginLoading, setLoginloading] = useState(false);
  useEffect(() => {
    const user = auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        history.push('/dashboard');
      }
    });
    return () => {
      user();
    }

  }, []);
  return (
    <Container>
      <div id="page-create-acount">
        <aside className="bainner">
          <img src={bainner} />
          <strong>Crie já a sua conta</strong>
          <p>Compartilha o seu conhecimento com mais de 5.000 mil estudantes
            em toda parte do país. Fazendo perguntas, lendo livros, criar grupos de estudo e recebendo respotas ao vivo.</p>
        </aside>

        <main className="contnt-form">
          <div className="logo">
            <img src={logo} />
          </div>
          <section className="main-content">
            <h2>
              Criar uma conta Tulling
            </h2>
            <form action="room.html">
              <label htmlFor="room-id" className="sr-only">
                Nome
              </label>
              <input
                type="text"
                id="room-id"
                placeholder="Nome de utilizador"
              />
              <label htmlFor="room-id" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="room-id"
                placeholder="Email de acesso"
              />

              <label htmlFor="room-id" className="sr-only">
                Senha
              </label>
              <input
                type="password"
                id="room-id"
                placeholder="Insera aqui a senha"
              />
              <Button>Criar conta</Button>

            </form>

            <div className="separetor">
              <div></div>
              <div>ou</div>
              <div></div>
            </div>
          </section>

          <section className="main-content">
            <Link className="btn-create create-count" to="/">
              Entrar na sala
            </Link>
          </section>
        </main>

      </div>
    </Container>
  );
};

export default SignUp;
