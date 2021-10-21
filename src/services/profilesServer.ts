import { userAcademy, userInfo, UserInfoInser } from '../types/geralTypes';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, Timestamp } from "@firebase/firestore";
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

export const updateUser = (uid:any, data: UserInfoInser) => {
	console.log(data);
	return new Promise(async (resolve, reject) => {
		const user: userInfo = {
			access: data.access,
			active: true,
			fullName: data.fullName,
			phoneNumber: data.phoneNumber,
			academy: { couse: data.couse, group: data.group, stuentYear: data.stuentYear, univercity: data.univercity, startYear: data.startYear },
			nacionality: { province: data.province, county: data.county, neighborhood: data.neighborhood },
			profilePhoto: data.profilePhoto,
			type: data.type,
			creatAt: Timestamp.fromDate(new Date()),
		}
		try {
			const userRef = doc(db, 'users', uid);
			 const restult = await setDoc(userRef, user, { merge: true })
			 resolve({result: 1});
		} catch (error) {
			reject( resolve({result: 2}));
		}
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

