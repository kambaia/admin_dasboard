import { userAcademy, userInfo, userNacionality } from '../types/geralTypes';
import { Question, Answers} from '../types/quesionTypes';
import { db } from '../firebase/config'

export const getQuestion = (id: any) => {
    return new Promise(async(resolve, reject) => {
        const question: any = [];
            const snapshot = await db.collection('/question').where("idUser", "!=", id).get();
            snapshot.forEach(data => {
                 question.push({ 
                    question:data.data()?.question,
                    about: data.data()?.about,
                    author: data.data()?.author,
                    avatar: data.data()?.avatar,
                    creatAt:  data.data()?.creatAt,
                    idUser:    data.data()?.idUser,
                    id: data.id});
            });
            resolve(question)
        })
}
export const getOnlyMyQuestion = (id: any) => {
    return new Promise(async(resolve, reject) => {
        const question: any = [];
        const snapshot = await db.collection('/question').where("idUser", "==", id).get();
        snapshot.forEach(data => {
                question.push({ 
                question:data.data()?.question,
                about: data.data()?.about,
                author: data.data()?.author,
                avatar: data.data()?.avatar,
                creatAt:  data.data()?.creatAt,
                idUser:    data.data()?.idUser,
                id: data.id});
          
        });
        resolve(question)
    })
}

export const detailsQuestion = (id: string) => {
    console.log(id)
    return new Promise((resolve, reject) => {
        db.collection('/question').doc(id).get().then((response)=>{
           console.log(response.data())
        }).catch((err)=>{
            reject(err)
        });
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
