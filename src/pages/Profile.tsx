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
import { getUser, upDateAcademyUser, updateUser } from '../services/profilesServer';
import { getUserProfile, onlyNumber } from '../utils';
import { userAcademy, userNacionality, userInfo } from '../types/geralTypes'
const Profile = () => {
	const [userData, setUserData] = useState<userInfo>({
		access: 1,
		active: false,
		creatAt: null,
		fullName: '',
		phoneNumber: '',
		profilePhoto: '',
		type: '',
		account: {email:'', studentNumber:0},
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
		stuentYear: '',
		group: '',
		couse: ''
	})

	const [editData, setEditData] = useState<boolean>();
	const studentNumber = onlyNumber(getUserProfile()?.email)
	useEffect(() => {
		getUserData();
	}, []);
	const getUserData = async () => {
		const user:any = await getUser(getUserProfile()?.uid);
		setUserData(user);
		setUserAcademy(user?.academy);
		setUserNacionality(user?.nacionality)
	}
const onSubmitInforUser = async (e: any) => {
	e.preventDefault();
	/*const userProfile: userInfo = {
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
	*/
	//const res = await updateUser(getUserProfile()?.uid, userProfile);

}
const onSubmitAcademyUser = async (e: any) => {
	/*e.preventDefault();
	const academy: userAcademy = {
		couse: userAcademy.couse,
		univercity: userAcademy.univercity,
		startYear: userAcademy.startYear,
		endYear: userAcademy.endYear
	};

	const res = await upDateAcademyUser(getUserProfile()?.uid, academy);
	*/
}

const onSubmitNacionalityUser = async (e: any) => {
	/*
	e.preventDefault();
	const nacionality: userNacionality = {
		province: userNacionality.province,
		county: userNacionality.county,
		neighborhood: userNacionality.neighborhood,

	};


	const res = await upDateNacionality(getUserProfile()?.uid, nacionality);
		*/
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
									<strong>Email</strong><span>{userData?.account?.email!}</span>
								</li>
								<li>
									<strong>Nº de telefone</strong><span>{userData.phoneNumber}</span>
								</li>
								<li>
									<strong>Nº de estudante</strong><span>{userData?.account?.studentNumber}</span>
								</li>
								<li>
									<strong>Ano: </strong><span>{userData.academy?.stuentYear}</span>
								</li>
								<li>
									<strong>Turma</strong><span>{userData.academy?.group}</span>
								</li>
							
							</form>
						</div>

					</ProfileStudante>
					<ContentWrapper>

						<CardInformation>
							<form onSubmit={onSubmitAcademyUser}>
								<div className="header-info"><h2>Informação academica do estudante</h2></div>
								<div className="body-info">
									<li>
										<strong>Universidade</strong><span>{userData.academy?.univercity}</span>
									</li>
									<li>
										<strong>Curso de </strong><span>{userData.academy?.couse}</span>
									</li>
									<li>
										<strong>Ano de inicio </strong><span>{userData.academy?.startYear}</span>
									</li>
									<li>
										<strong>Ano de finalidade </strong><span>{userData.academy?.endYear}</span>
									</li>
								</div>
								
							</form>
						</CardInformation>
						<CardInformation>
							<form onSubmit={onSubmitNacionalityUser}>
								<div className="header-info"><h2>Informaçães da morada</h2></div>
								<div className="body-info">
									<li>
										<strong>Provincia</strong><span>{userData.nacionality?.province}</span>
									</li>
									<li>
										<strong>Município</strong><span>{userData.nacionality?.county} </span>
									</li>
									<li>
										<strong>Bairro</strong><span>{userData.nacionality?.neighborhood} </span>
									</li>
								</div>
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

