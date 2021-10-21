import { SignUpUser, SignInData, UserLogged } from '../types/types'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../firebase/config';
import axios from 'axios';
import { collection, doc, getDoc } from "@firebase/firestore";
export const createAccount = (data: SignUpUser, loginUser: SignInData) => {
	return new Promise(async (resolve, reject) => {
		const resp = createUserWithEmailAndPassword(auth, loginUser.email, loginUser.password).then((res) => {
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
	return new Promise(async (resolve, reject) => {
		try {
			const docUser = id;
			const docRef = doc(db, `users/${docUser}`);
			console.log(docUser)
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				resolve(docSnap.data());
			} else {
				resolve("No such document!");
			}
		} catch (error) {
			reject(error);
		}
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



export const SendEmail = (user:any) => {
	return new Promise((resolve, reject) => {
		axios({
			method: 'post',
			url: "http://localhost:8000/send",
			data: user
		})
			.then((respDone) => {
				console.log(respDone)
			})
			.catch((err) => {
				console.log(err);
				reject('ERRO');
			});
	})

};

