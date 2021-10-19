import { SignUpUser, SignInData, UserLogged } from '../types/types'
import { getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth,} from '../firebase/config'

export const createAccount = (data: SignUpUser, loginUser: SignInData) => {
	return new Promise(async (resolve, reject) => {
		const resp=  createUserWithEmailAndPassword(auth, loginUser.email, loginUser.password).then((res) => {
         console.log(resp);
		}).catch((err) => {
			console.log(err)
		});
	})
}

export const loginAccount = async (form: any) => {
	return new Promise((resolve, reject) => {

	})
}

export const getUser = (id: any) => {
	return new Promise((resolve, reject) => {
		/* db.collection('/user').doc(id).get().then((response)=>{
			 resolve(response)
		 }).catch((err)=>{
			 reject(err)
		 });
		 */
	})
}

export const setPassWordResetEmail = async (email: string) => {
	try {
		/* await auth().sendPasswordResetEmail(email);*/
	} catch (err) {

	}
}

export const SignOut = async () => {
	await signOut(auth);
}


