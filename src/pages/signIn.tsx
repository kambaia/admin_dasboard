import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {onAuthStateChanged, signInWithRedirect, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import logo from "../assets/logo.png";
import { auth, db} from "../firebase/config";
import { collection, doc, setDoc, Timestamp} from 'firebase/firestore'
import { FcGoogle } from "react-icons/fc";
import { Container, Loading } from "../styles/pages/loginStyles";
import bainner from "../assets/bainner.svg";
import { Button } from "../components/Button";
import colors  from '../styles/colors';
import { SignUpUser } from "../types/types";
import Input from "../components/Input";
import { loginAccount} from "../services/authUser";

const SignIn = () => {
  const history = useHistory();
  const [loginLoading, setLoginloading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorLogin, setErrcorLogin] = useState<any>();

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

  const signWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    if (result.user) {
      const { displayName, photoURL, uid } = result.user;
        let userData: SignUpUser = {
          fullName: displayName,
          phoneNumber: "",
          type: "user",
          profilePhoto: photoURL,
          active: false,
          access: 1,
          id: uid,
          creatAt: Timestamp.fromDate(new Date()),
        };
		const userRef = doc(db, 'users', uid);
		setDoc(userRef, userData, { merge: true }).then(res=>{
             console.log(res);
		}).catch(console.log);
      }
    }
  const accessWithAcount = async (e:any) => {
    e.preventDefault();
    if(!form.email || !form.password){
      setErrcorLogin('Prencha todos os campas para entras em sua sala!');
     return;
    }
    setLoginloading(true)
    const res:any = await loginAccount(form);
    console.log(res)
    setLoginloading(false)
  };

  return (
    <Container>
      <div id="page-create-acount">
        <aside className="bainner">
          <img src={bainner} />
          <strong>Seja bem vindo de volta</strong>
          <p>
            O seu grupo está espera de você. Entre agora e vê o há de novo hoje!
          </p>
        </aside>

        <main className="contnt-form">
          <section className="main-content">
            <div className="logo">
              <img src={logo} />
            </div>
            <button
              onClick={signWithGoogle}
              className="btn-create login-with-google"
            >
              <FcGoogle size={25} /> <span>Entrar com google classroom</span>
            </button>

            <h2>Acessa a sua conta</h2>
            {errorLogin?
             <div className="error-message">
               <span>{errorLogin}</span>
             </div>:''
              }
            <form onSubmit={accessWithAcount}>
            <div className="input">
                <label htmlFor="room-id" className="sr-only">
                  Email
                </label>
                <Input
                  icon={FiMail}
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
              <Button>{loginLoading?<Loading loading={true}>
            <AiOutlineLoading3Quarters size={30} color="#111111" />
          </Loading>:  'Entrar na sala'}</Button>
            </form>
            <div className="separetor">
              <div></div>
              <div>ou</div>
              <div></div>
            </div>
          </section>

          <section className="main-content">
            <Link className="btn-create create-count" to="/signup">
              Crie a sua conta
            </Link>
          </section>
        </main>
      </div>
    </Container>
  );
};

export default SignIn;
