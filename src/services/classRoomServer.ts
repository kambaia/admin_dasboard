import { QuestionTypes, AnswersTypes, CommentsTypes} from '../types/quesionTypes';
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
    return new Promise((resolve, reject) => {
        db.collection('/question').doc(id).get().then((response)=>{
         resolve(response.data())
        }).catch((err)=>{
            reject(err)
        });
    })
}

export const addQuestion = (id:any, question: QuestionTypes) => {
    return new Promise((resolve, reject) => {
        db.collection('/question').add(question).then((response)=>{
               
        }).catch((err) => {
            reject(err)
        });
    })
}

export const answerAddQuestion = (idQuestion: string, data:AnswersTypes) => {
    return new Promise((resolve, reject) => {
        var questionRef =
            db.collection('/question').doc(idQuestion)
              .collection('/answer');
            questionRef
            .add(data)
            .then((e)=>{
               resolve({addmessa: true});
            })
            .catch(function (error) {
                console.error('Error adding document: ', error);
                resolve({addmessa: true});
            });
        })
}

export const answerAddCommentting = (questionId:string,idAnswer: string, data:CommentsTypes) => {
    return new Promise((resolve, reject) => {
        console.log(idAnswer);
        var questionRef =
            db.collection('/question').doc(questionId)
            .collection('/answer').doc(idAnswer)
            .collection('/comments')
                .add(data)
                .then((e)=>{
                    console.log(e);
                resolve({addmessa: true});
                })
            .catch(function (error) {
                console.error('Error adding document: ', error);
                resolve({addmessa: true});
            });
        })
}



export const allAnswerQuestion = (idQuestion: string) => {
    return new Promise((resolve, reject) => {
        const question: any = [];
        var questionRef =
            db.collection('/question').doc(idQuestion)
              .collection('/answer');
            questionRef
            .get()
            .then((snapshot)=>{
                snapshot.forEach(data => {
                    question.push({ 
                       answer:data.data()?.answer,
                       creatAt:  data.data()?.creatAt,
                       user:    data.data()?.user,
                       userName: data.data().userName,
                       id: data.id});
               });
               resolve(question)
            })
            .catch(function (error) {
                console.error('Error adding document: ', error);
                resolve({addmessa: true});
            });
        })
}


export const allAnswerCommits = (questionId:string,idAnswer: string) => {
    return new Promise((resolve, reject) => {
        const question: any = [];
        var questionRef =
            db.collection('/question').doc(questionId)
              .collection('/answer').doc(idAnswer)
              .collection('/comments');
            questionRef
            .get()
            .then((snapshot)=>{
                snapshot.forEach(data => {
                    console.log(data.data())
                    question.push({ 
                        comment:data.data()?.comment,
                        creatAt:  data.data()?.creatAt,
                        user:    data.data()?.user,
                        userName: data.data().userName,
                        id: data.id});
               });
               resolve(question)
            })
            .catch(function (error) {
                console.error('Error adding document: ', error);
                resolve({addmessa: true});
            });
        })
}

