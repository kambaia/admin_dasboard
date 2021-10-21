import { db } from '../firebase/config';
import { addDoc,query, collection, where } from "@firebase/firestore";
import { Exercise } from '../types/geralTypes';
export const addExercises = (data: Exercise) => {
	return new Promise(async (resolve, reject) => {
		console.log(data);
		try {
			// Add a new document with a generated id.
			const result = await addDoc(collection(db, "exercises"), {data});
			console.log("Document written with ID: ", result.id);
			resolve(result);
		} catch (error) {
			console.log(error);
		}
	});
}

export const getAllExirceses= () => {
	const exercisesRef = query(collection(db, 'exercises'));
	return exercisesRef;
  };