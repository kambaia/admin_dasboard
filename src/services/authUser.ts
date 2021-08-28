import {SignUpUser, SignInData, UserLogged} from './types'
import firebase, {db, auth} from '../firebase/config'
export const createAccountArtist = (data: SignUpUser) => {
    return new Promise((resolve, reject) => {
        auth().createUserWithEmailAndPassword(data.account.email, data.account.password).then((res) => {
            if (res.user) {
                const account = { email: data.account.email, password: data.account?.password }
                const userData: SignUpUser = {
                    fullname: data.fullname,
                    phoneNumber: data.phoneNumber,
                    type: data.type,
                    active: data.active,
                    access: data.access,
                    account: account,
                    id: res.user.uid,
                    creatAt: firebase.firestore.FieldValue.serverTimestamp()
                };
              db.collection('/users').doc(res.user.uid).set(userData).then((response)=>{
                const artist = response;
               /* res.user?.updateProfile({
                    displayName: data.fullname,
                    photoURL: artist.profilePhoto,
                })
                */
                resolve(res)
              });

               res.user.sendEmailVerification();
            }
        }).catch((err)=>{
            console.log(err)
        });
    })
}

export const loginAccountArtist = async (data: SignInData) => {
    return new Promise((resolve, reject) => {
        auth().signInWithEmailAndPassword(data.email, data.password).then((res) => {    
            if (res.user) {
                db.collection('/user').doc(res.user.uid).get().then((response)=>{
                    resolve(response)
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


