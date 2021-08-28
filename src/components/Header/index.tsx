import React, { FC, useState, useContext} from "react";
import { Link } from 'react-router-dom'
import { Container, ProfileContent} from "./styles";
import { FaRegUserCircle } from "react-icons/fa";
import { getUserProfile } from "../../utils";
import { DatasContext } from "../../config/DataShare/DataProvider";
 let userLogined:any = {};
const Header: FC = () => {
  const user = getUserProfile();
  const [artistName, setArtistName] = useState<string | null>(window.localStorage.getItem('artist'));
  const [iconUser] = useState(<FaRegUserCircle size={35} />);
  const [loading, setLoading] = useState(false);
  const [userLogin, setUserLogin] = useState<any>();
  const { showMenu} = useContext(DatasContext);
  userLogined = user;
  return (
    <>
      <Container showMenu={showMenu}>
        <div className="header">
          <div className="user-artist">
            <ProfileContent>
              <div className="user">
                {userLogined?.photoURL ? <img
                  src={userLogined?.photoURL!}
                  alt="userImage"
                /> : iconUser}
              </div>
              <div className="userInfo">
                <Link style={{ color: '#333', textDecoration: 'none', fontSize: 18 }} className="nav" to={'/dashboad'}>{userLogined?.displayName ? userLogined?.displayName : 'Usuário'}</Link>
                <span><Link style={{ color: '#333', textDecoration: 'none' }} className="nav" to={ '/dashboad'}></Link></span>
              </div>
            </ProfileContent>
          </div>
        </div>

      </Container>
    </>
  );
};

export default Header;
