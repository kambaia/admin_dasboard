import { userAcademy, userInfo, userNacionality } from '../types/geralTypes';
import { db } from '../firebase/config';
export const getUser = (id: any) => {
	return new Promise((resolve, reject) => {
		/*
		db.collection('/users').doc(id).get().then((response) => {
			resolve(response.data())
		}).catch((err) => {
			reject(err)
		});
		*/
	})
}

export const updateUser = (id: any, data: userInfo) => {
	return new Promise((resolve, reject) => {
		/*
		db.collection('/users').doc(id).update(data).then((response) => {
			console.log(response)
		}).catch((err) => {
			reject(err)
		});
		*/
	})
}
export const upDateAcademyUser = (id: any, academy: userAcademy) => {
	/*
	const data = {
		academy: academy,
	}
	return new Promise((resolve, reject) => {
		const userRef =
			db.collection('/users').doc(id).update(data)
				.then((response) => {
					console.log(response)
				}).catch((err) => {
					reject(err)
				});
	})
	*/
}

export const upDateNacionality = (id: any, nacionality: userNacionality) => {
	const data = {
		nacionality
	}
	/*
	return new Promise((resolve, reject) => {
		const userRef =
			db.collection('/users').doc(id).update(data)
				.then((response) => {
					console.log(response)
				}).catch((err) => {
					reject(err)
				});




				 onSnapshot(q, (querySnapshot)=>{
         const user = [];
		 querySnapshot.forEach((doc)=>{
           
		 })
		 
		 
	  })
	})
	*/
}
