import React, { useEffect, useState } from "react";
import { FiLock, FiUser, FiAtSign } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import logo from "../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth';
import { Container } from "../styles/pages/registerStyles";
import bainner from "../assets/registraBainner.svg";
import { Button } from "../components/Button";
import { auth, db } from "../firebase/config";
import Input from "../components/Input";
import colors from "../styles/colors";
import { createAccount } from "../services/authUser";
const SignUp = () => {
  const history = useHistory();
  const [createLoading, setCreateLoading] = useState(false);
  const [errorRegister, setErrorRegister] = useState<any>();
  const [form, setForm] = useState({
    fullName: "",
    access: 1,
    profilePhoto: "",
    type: "user",
    active: false,
    phoneNumber: "",
    email: "", password: ""
  });
  useEffect(() => {
	const user = onAuthStateChanged(auth, user => {
		if (user?.uid && user.email) {
		  history.push("/dashboard");
		}
    });
    return () => {
      user();
    };
  }, []);
  const capitalizeAllString = (str: string) => {
    const substing = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
    return substing;
  };
  const accessWithAcount = async (e:any) => {
      e.preventDefault();
      if (!form.fullName || !form.email || !form.password) {
        setErrorRegister('Prencha todos os campas para avançar com o regitro!');
        setCreateLoading(false);
      } else {
        const account={ email: form.email, password: form.password};
        const res:any = createAccount({fullName: form.fullName, access: form.access, type: form.type, active: form.active, phoneNumber: form.phoneNumber}, {email: form.email, password:form.password});
        history.push('/dashboard');
      }

  };
  const onClearForm = () => {
      setForm({
        fullName: "",
        access: 1,
        profilePhoto: "",
        type: "",
        active: false,
        phoneNumber: "",
        email: "", password: ""
      });
    }

  return (
    <Container>
      <div id="page-create-acount">
        <aside className="bainner">
          <img src={bainner} />
          <strong>Crie já a sua conta</strong>
          <p>
            Compartilha o seu conhecimento com mais de 5.000 mil estudantes em
            toda parte do país. Fazendo perguntas, lendo livros, criar grupos de
            estudo e recebendo respotas ao vivo.
          </p>
        </aside>

        <main className="contnt-form">
          <div className="logo">
            <img src={logo} />
          </div>
          <section className="main-content">
            <h2>Criar uma conta Tulling</h2>
            {errorRegister?
             <div className="error-message">
               <span>{errorRegister}</span>
             </div>:''
              }
            <form onSubmit={accessWithAcount}>
              <div className="input">
                <label htmlFor="room-id" className="sr-only">
                  Nome
                </label>
                <Input
                  icon={FiUser}
                  name="fullName"
                  type="text"
                  id="room-id"
                  value={form.fullName}
                  placeholder="Nome de utilizador"
                  border_color={colors.orange}
                  onChange={(e)=>setForm({...form, fullName: e.target.value})}
                />
              </div>
              <div className="input">
                <label htmlFor="room-id" className="sr-only">
                  Email
                </label>
                <Input
                  icon={FiAtSign}
                  type="email"
                  id="room-id"
                  value={form.email}
                  placeholder="Email de acesso"
                  border_color={colors.orange}
                  onChange={(e)=>setForm({...form, email: e.target.value})}
                />
              </div>
              <div className="input">
                <label htmlFor="room-id" className="sr-only">
                  Senha
                </label>
                <Input
                icon={FiLock}
                  type="password"
                  id="room-id"
                  value={form.password}
                  placeholder="Insera aqui a senha"
                  border_color={colors.orange}
                  onChange={(e)=>setForm({...form, password: e.target.value})}
                />
              </div>
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
