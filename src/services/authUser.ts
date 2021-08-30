import {SignUpUser, SignInData, UserLogged} from './types'
import firebase, {db, auth} from '../firebase/config'
export const createAccount = (data: SignUpUser, loginUser: SignInData) => {
    return new Promise((resolve, reject) => {
        auth().createUserWithEmailAndPassword(loginUser.email,loginUser.password).then((res) => {
            if (res.user) {
                console.log(res.user.updatePassword)
                const userData: SignUpUser = {
                    fullName: data.fullName,
                    phoneNumber: data.phoneNumber,
                    type: data.type,
                    active: data.active,
                    access: data.access,
                    id: res.user.uid,
                    creatAt: firebase.firestore.FieldValue.serverTimestamp()
                };
              db.collection('/users').doc(res.user.uid).set(userData).then((response)=>{
               /*
                localStorage.setItem('user', res.user)
                */
                res.user?.updateProfile({
                    displayName: data.fullName,
                })
                resolve(res)
                resolve(res)
              });

               res.user.sendEmailVerification();
            }
        }).catch((err)=>{
            console.log(err)
        });
    })
}

export const loginAccount = async (form:any) => {
    return new Promise((resolve, reject) => {
        auth().signInWithEmailAndPassword(form.email, form.password).then((res) => {    
            if (res.user) {
                db.collection('/users').doc(res.user.uid).get().then((response)=>{
                    console.log(response);
                    resolve(response.data())
                }).catch((err)=>{
                    reject(err)
                });
            }else{
                const message = {
                    message: "Usuário inválido"
                }
                reject(message);
            }
    })
})
}

export const getUser= (id:any) => {
    return new Promise((resolve, reject) => {
      db.collection('/user').doc(id).get().then((response)=>{
          resolve(response)
      }).catch((err)=>{
          reject(err)
      });
    })
}

export const setPassWordResetEmail = async (email: string) => {
    try {
        await auth().sendPasswordResetEmail(email);
    } catch (err) {
        console.log(err.message);
    }
}

export const SignOut = async () => {
    window.localStorage.removeItem('artist')
    await auth().signOut();
}


