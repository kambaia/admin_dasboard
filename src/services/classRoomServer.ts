import { userAcademy, userInfo, userNacionality } from '../geralTypes';
import { db } from '../firebase/config'

export const getQuestion = (id:any) => {
    return new Promise((resolve, reject) => {
        const question:any= [];
        db.collection('/question').get().then((response) => {
            console.log(response)
            response.forEach(data => {
                question.push(data.data());
                resolve(question)
            });
            
        }).catch((err) => {
            reject(err)
        });
    })
}

export const addQuestion = (id: any) => {
    return new Promise((resolve, reject) => {
        db.collection('question').add(id).then((response) => {
         
        }).catch((err) => {
            reject(err)
        });
    })
}

export const upDateAcademyUser = (id: any, academy: userAcademy) => {
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
}

export const upDateNacionality = (id: any, nacionality: userNacionality) => {
    const data = {
        nacionality
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
}
