import React, { useState, useEffect} from 'react';
import { FullContainer } from '../styles/pages/home';
import { MainContent, Container, CardHeader, Wrapper} from '../styles/pages/generalStyles';
import { getUserProfile} from '../utils';
import { getUser } from '../services/authUser'
import { userInfo } from '../types/geralTypes';
import { info } from 'console';
const Home = () => {
	const [userInfo, setUserInfo] = useState<userInfo>();
	useEffect(() => {
		VerifyUser();
	}, []);
	const VerifyUser = async () => {
		const user: any = await getUser(getUserProfile()?.uid);
		setUserInfo(user);
	}
  return (
    <MainContent>
    <Container>
      <CardHeader>
        <h2>{userInfo?.active? `OLÁ ${userInfo.fullName?.toUpperCase()} SEJÁ BEM VINDO DE VOLTA`: `OLÁ ${userInfo?.fullName?.toUpperCase()} SEJÁ BEM A SUA SALA`}</h2>
      </CardHeader>
	  <CardHeader>
        <a href="/edit-profile-study" className="active-account">Edite agora o seu perfil para desfrutar o que o Tulling Yetu oferece para ti!</a>
      </CardHeader>
     
    </Container>
  </MainContent>

  )
}

export default Home;

