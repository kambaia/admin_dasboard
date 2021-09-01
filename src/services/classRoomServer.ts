import { userAcademy, userInfo, userNacionality } from '../types/geralTypes';
import { Question, Answers} from '../types/quesionTypes';
import { db } from '../firebase/config'

export const getQuestion = (id: any) => {
    return new Promise(async(resolve, reject) => {
        const question: any = [];
       const data = await db.collection('/question').onSnapshot(response => {
            response.docChanges().forEach(data => {
                question.push(data.doc.data());
               return resolve(question);
            });
        })
    })
}
export const addQuestion = (id:any, question: Question) => {
    return new Promise((resolve, reject) => {
        db.collection('/question').add(question).then((response)=>{
                console.log(response)
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
