import { userAcademy, userInfo, userNacionality } from '../types/geralTypes';
import { getUserProfile} from '../utils'
import { db } from '../firebase/config'

export const getUser = (id: any) => {
    return new Promise((resolve, reject) => {
        db.collection('/users').doc(id).get().then((response) => {
            resolve(response.data())
        }).catch((err) => {
            reject(err)
        });
    })
}

export const updateUser = (id: any, data: userInfo) => {
    return new Promise((resolve, reject) => {
        db.collection('/users').doc(id).update(data).then((response) => {
            console.log(response)
        }).catch((err) => {
            reject(err)
        });
    })
}

export const updateProfileImage = (id: any, img: string) => {
    return new Promise((resolve, reject) => {
        db.collection('/users').doc(id).update({profilePhoto:img}).then((response) => {
            let user = getUserProfile();
            user?.updateProfile({
                 photoURL: img
              });        
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
