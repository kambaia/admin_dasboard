
import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import avatar from '../assets/avatar.jpg'
import {
	MainContent,
	Container,
	CardHeader,
	Wrapper,
} from "../styles/pages/generalStyles";
import { CardContent, ContentWrapper, ProfileStudante, CardInformation, ContentUpdate } from "../styles/pages/ProfileStyles";
import { Button } from "../components/Button";
import { getUser, updateUser } from '../services/profilesServer';
import { getUserProfile, onlyNumber } from '../utils';
import { userAcademy, userNacionality, userInfo, UserInfoInser } from '../types/geralTypes';
import emailjs from "emailjs-com";
import { SendEmail } from "../services/authUser";
import { useHistory } from 'react-router-dom';
const EditProfile = () => {
	const [userData, setUserData] = useState<UserInfoInser>({
		access: 1,
		active: false,
		creatAt: null,
		fullName: "",
		phoneNumber: "",
		profilePhoto: "",
		type: "",
		email: "",
		studentNumber: 0,
		nacionality: "",
		county: "",
		neighborhood: "",
		province: "",
		academy: "",
		couse: "",
		group: "",
		startYear: "",
		stuentYear: "",
		univercity: ""
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
	const [messageError, setMessageError] = useState("");
	const [messageSanding, setMessageSanding] = useState("");
	const history = useHistory();
	useEffect(() => {
		getUserData();
	}, []);
	const getUserData = async () => {
		const user: any = await getUser(getUserProfile()?.uid);
		setUserData(user);
		setUserAcademy(user?.academy);
		setUserNacionality(user?.nacionality)
	}
	const onSubmitInforUser = async (e: any) => {
		e.preventDefault();
		const userProfile = userData;
		//const res = await updateUser(getUserProfile()?.uid, userProfile);
	}
	const onSubmitEmail = async (e: any) => {
		e.preventDefault();
		const user:any = await updateUser(getUserProfile()?.uid, userData);
		if(user.result){
			history.push("/auth/account-active-success");
		}
		onClearData();
	}
	const onClearData = () => {
		setUserData({
			access: 1,
			active: true,
			creatAt: null,
			fullName: "",
			phoneNumber: "",
			profilePhoto: "",
			type: "",
			email: "",
			studentNumber: 0,
			nacionality: "",
			county: "",
			neighborhood: "",
			province: "",
			academy: "",
			couse: "",
			group: "",
			startYear: "",
			stuentYear: "",
			univercity: ""
		});
	}
	const onEditData = () => {

	}
	return (
		<MainContent>
			<Container>
				<CardHeader
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<div>
						<h2>Preenchimento das Informações Pessoais</h2>

					</div>
				</CardHeader>
				<Wrapper>
					<form onSubmit={onSubmitEmail}>
						<CardContent>

							<ProfileStudante>
								<div className="profile-avatar">
									<div className="avatar"><img src={userData?.profilePhoto!} /></div>

									<div className="profile-name"><h3>{userData?.fullName}</h3></div>
								</div>
								<div className="info-estudent">

									<li>
										<strong>Email</strong><span>{getUserProfile()?.email}</span>
									</li>
									<li>
										<strong>Nº de telefone</strong><span><input type="tel" placeholder="Ex. 923 298 190" value={userData?.phoneNumber!} onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} /></span>
									</li>

									<li>
										<strong>Estudando: </strong><span>
											<div className="select-option">
												<select onChange={(e) => setUserData({ ...userData, stuentYear: e.target.value })}>
													<option value="1ª ano">Seleciona o ano em que estas</option>
													<option value="1ª ano">1º ano</option>
													<option value="2ª ano">2º ano</option>
													<option value="3ª ano">3º ano</option>
													<option value="4ª ano">4º ano</option>
													<option value="5ª ano">5º ano</option>
													<option value="6ª ano">6º ano</option>
												</select>
											</div>
										</span>

									</li>
									<li>
										<strong>Turma</strong><span><input type="text" placeholder="Ex. EINF1_M1" value={userData?.group} disabled={editData} onChange={(e) => setUserData({ ...userData, group: e.target.value })} /></span>
									</li>

								</div>
							</ProfileStudante>
							<ContentWrapper>
								<CardInformation>
									<div className="header-info"><h2>Informação academica do estudante</h2></div>
									<div className="body-info">
										<li>
											<strong>Universidade</strong><span><input type="text" value={userData?.univercity} onChange={(e) => setUserData({ ...userData, univercity: e.target.value })} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} /></span>
										</li>
										<li>
											<strong>Curso de </strong><span><input type="text" value={userData?.couse} onChange={(e) => setUserData({ ...userData, couse: e.target.value })} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} /></span>
										</li>
										<li>
											<strong>Ano de inicio </strong><span><input type="text" value={userData?.startYear} onChange={(e) => setUserData({ ...userData, startYear: e.target.value })} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} /></span>
										</li>
									</div>
								</CardInformation>
								<CardInformation>
									<div className="header-info"><h2>Informaçães da morada</h2></div>
									<div className="body-info">
										<li>
											<strong>Provincia</strong><span>
												<div className="select-option">
													<select onChange={(e) => setUserData({ ...userData, province: e.target.value })}>
														<option>Seleciona a província</option>
														<option>Luanda</option>
													</select>
												</div>

											</span>
										</li>
										<li>
											<strong>Município</strong><span><input type="text" value={userData.county} onChange={(e) => setUserData({ ...userData, county: e.target.value })} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} /></span>
										</li>
										<li>
											<strong>Bairro</strong><span><input type="text" value={userData.neighborhood} onChange={(e) => setUserData({ ...userData, neighborhood: e.target.value })} disabled={editData} /><FiEdit style={{ cursor: 'pointer' }} onClick={onEditData} /></span>
										</li>
									</div>
								</CardInformation>
							</ContentWrapper>

						</CardContent>
						<ContentUpdate className="content-btn-update">
							<div className="btn-update"><Button onClick={onSubmitEmail}>Actualizar</Button></div>
						</ContentUpdate>
					</form>

				</Wrapper>
			</Container>
		</MainContent>
	);
};

export default EditProfile;

