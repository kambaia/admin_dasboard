import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import avatar from '../assets/avatar.jpg'
import {
    MainContent,
    Container,
    CardHeader,
    Wrapper,
} from "../styles/pages/generalStyles";
import { CardContent, ContentWrapper, ProfileStudante, CardInformation } from "../styles/pages/ProfileStyles";
import { Button } from "../components/Button";
import { getUser, upDateAcademyUser, upDateNacionality, updateUser } from '../services/profilesServer';
import { getUserProfile } from '../utils';
import { userAcademy, userNacionality, userInfo} from '../geralTypes'
const Profile = () => {
    const [userData, setUserData] = useState<userInfo>({
        access: 1,
        active: false,
        creatAt: null,
        fullName: '',
        id: '',
        phoneNumber: '',
        profilePhoto: '',
        type: '',
        email: '',
        studentNumber: 0,
        stuentYear: '',
        group: ''

    });
    const [userNacionality, setUserNacionality] = useState<userNacionality>({ 
        province: '',
         county: '',
          neighborhood: '',
           })
        const [userAcademy, setUserAcademy] = useState<userAcademy>({ 
            univercity: '',
            startYear: '',
            endYear: '',
            couse: ''})

    const [editData, setEditData] = useState<boolean>();

    useEffect(() => {
        getUserData();

    }, []);

    const getUserData = async () => {
        const user = getUserProfile();
        console.log(user?.uid);
        const data: any = await getUser(user?.uid);
        setUserData(data);
        setUserAcademy(data?.academy);
        setUserNacionality(data?.nacionality)
    }

    const onEditData = () => {
        setEditData(!editData);
        if (editData) {
            alert("Editar os dados");
        } else {
            alert("Não editar os dados");
        }
    }

    const onSubmitInforUser = async(e:any)=>{
        e.preventDefault();
       const userProfile:userInfo = {
           type: "user",
           access: 1,
           active: false,
           creatAt: new Date(),
           profilePhoto: getUserProfile()?.photoURL,
           fullName: getUserProfile()?.displayName,
           id: getUserProfile()?.uid,
           phoneNumber: userData.phoneNumber,
           email: getUserProfile()?.email,
           studentNumber: userData.studentNumber,
           stuentYear: userData.stuentYear,
           group: userData.group
       };
       const res = await updateUser(getUserProfile()?.uid, userProfile);

    }

    const onSubmitAcademyUser = async(e:any)=>{
        e.preventDefault();
        const academy:userAcademy = {
            couse: userAcademy.couse,
            univercity: userAcademy.univercity,
            startYear: userAcademy.startYear,
            endYear: userAcademy.endYear
        };
        
        const res = await upDateAcademyUser(getUserProfile()?.uid, academy);
   }

   const onSubmitNacionalityUser = async(e:any)=>{
    e.preventDefault();
    const nacionality:userNacionality = {
        province: userNacionality.province,
         county: userNacionality.county,
        neighborhood: userNacionality.neighborhood,
       
    };
    
    const res = await upDateNacionality(getUserProfile()?.uid, nacionality);
}
    return (
        <MainContent>
            <Container>
                <CardHeader
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>
                        <h2>Perfil do estudante</h2>
                    </div>
                </CardHeader>
                <Wrapper>

                    <CardContent>

                        <ProfileStudante>
                            <div className="profile-avatar">
                                <div className="avatar"><img src={userData?.profilePhoto!} /></div>

                                <div className="profile-name"><h3>{userData?.fullName}</h3></div>
                            </div>
                            <div className="info-estudent">
                                <form onSubmit={onSubmitInforUser}>
                                    <li>
                                        <strong>Email</strong><span>kambaiaalberto@gmail.com</span>
                                    </li>
                                    <li>
                                        <strong>Nº de telefone</strong><span><input type="tel" value={userData?.phoneNumber!} onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} /></span>
                                    </li>
                                    <li>
                                        <strong>Nº de estudante</strong><span><input type="number" value={userData?.studentNumber} onChange={(e) => setUserData({ ...userData, studentNumber: parseInt(e.target.value) })} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} /></span>
                                    </li>
                                    <li>
                                        <strong>Ano: </strong><span><input type="text" value={userData?.stuentYear} onChange={(e) => setUserData({ ...userData, stuentYear: e.target.value })} disabled={editData} /></span><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} />
                                    </li>
                                    <li>
                                        <strong>Turma</strong><span><input type="text" value={userData?.group} disabled={editData} onChange={(e) => setUserData({ ...userData, group: e.target.value })} /></span>
                                    </li>
                                    <div className="btn-update"><Button onSubmit={onSubmitInforUser}>Actualizar</Button></div>
                                </form>
                            </div>

                        </ProfileStudante>
                        <ContentWrapper>

                            <CardInformation>
                                <form onSubmit={onSubmitAcademyUser}>
                                    <div className="header-info"><h2>Informação academica do estudante</h2></div>
                                    <div className="body-info">
                                        <li>
                                            <strong>Universidade</strong><span><input type="text" value={userAcademy?.univercity} onChange={(e)=>setUserAcademy({...userAcademy, univercity: e.target.value})}  disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} /></span>
                                        </li>
                                        <li>
                                            <strong>Curso de </strong><span><input type="text" value={userAcademy?.couse} onChange={(e)=>setUserAcademy({...userAcademy, couse: e.target.value})} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} /></span>
                                        </li>
                                        <li>
                                            <strong>Ano de inicio </strong><span><input type="text" value={userAcademy?.startYear} onChange={(e)=>setUserAcademy({...userAcademy, startYear: e.target.value})} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData}/></span>
                                        </li>
                                        <li>
                                            <strong>Ano atual </strong><span><input type="text" value={userAcademy?.endYear} onChange={(e)=>setUserAcademy({...userAcademy, endYear: e.target.value})} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData}/></span>
                                        </li>
                                    </div>
                                    <div className="btn-update"><Button onSubmit={onSubmitAcademyUser}>Actualizar</Button></div>
                                </form>
                            </CardInformation>
                            <CardInformation>
                                <form onSubmit={onSubmitNacionalityUser}>
                                    <div className="header-info"><h2>Informaçães da morda</h2></div>
                                    <div className="body-info">
                                        <li>
                                            <strong>Provincia</strong><span><input type="text" value={userNacionality?.province} onChange={(e)=>setUserNacionality({...userNacionality, province: e.target.value})} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData}/></span>
                                        </li>
                                        <li>
                                            <strong>Município</strong><span><input type="text" value={userNacionality?.county} onChange={(e)=>setUserNacionality({...userNacionality, county: e.target.value})} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} /></span>
                                        </li>
                                        <li>
                                            <strong>Bairro</strong><span><input type="text" value={userNacionality?.neighborhood} onChange={(e)=>setUserNacionality({...userNacionality, neighborhood: e.target.value})} disabled={editData}/><FiEdit style={{ cursor: 'pointer' }}  onClick={onEditData}/></span>
                                        </li>

                                    </div>
                                    <div className="btn-update"><Button onSubmit={onSubmitNacionalityUser}>Actualizar</Button></div>
                                </form>
                            </CardInformation>
                        </ContentWrapper>
                    </CardContent>
                </Wrapper>
            </Container>
        </MainContent>
    );
};

export default Profile;
