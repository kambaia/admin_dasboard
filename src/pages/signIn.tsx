import React, { useEffect, useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import logo from '../assets/logo.png'
import firebase, { auth, db} from '../firebase/config';
import { FcGoogle} from 'react-icons/fc'
import { Container } from "../styles/pages/loginStyles";
import bainner from '../assets/bainner.svg';
import { Button } from "../components/Button";

const SignIn = () => {
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

  function accessWithGoogleAcount(){
    const provider = new firebase.auth.GoogleAuthProvider();
    auth().signInWithPopup(provider).then((response)=>{
        console.log(response);
    }).catch((err)=>{
      console.log(err)
    })
 }

  return (
    <Container>
    <div id="page-create-acount">
    <aside className="bainner">
       <img src={bainner} />
       <strong>Seja bem vindo de volta</strong>
       <p>O seu grupo está espera de você. Entre agora e vê o há de novo hoje!</p>
    </aside>

    <main className="contnt-form">
         <section className="main-content">
           <div className="logo">
           <img src={logo}/>
           </div>
           <button  onClick={accessWithGoogleAcount} className="btn-create login-with-google">
               <FcGoogle size={25}/>  <span>Entrar com google</span>
            </button>
          
           <form >
           <h2>
            Acessa a sua conta
           </h2>
            <section className="main-content">
            
          </section>
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
             <Button>Entrar na sala</Button>
             
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
