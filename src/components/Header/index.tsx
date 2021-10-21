import React, { FC, useState, useContext} from "react";
import { Link } from 'react-router-dom'
import { Container, ProfileContent} from "./styles";
import { FaRegUserCircle } from "react-icons/fa";
import { DatasContext } from "../../config/DataShare/DataProvider";
import { AuthContext} from "../../config/Auth/AuthContext";
import { onlyLetters } from "../../utils";
const Header: FC = () => {
  const [artistName, setArtistName] = useState<string | null>(window.localStorage.getItem('artist'));
  const [iconUser] = useState(<FaRegUserCircle size={35} />);
  const [loading, setLoading] = useState(false);
  const [userLogin, setUserLogin] = useState<any>();
  const { showMenu} = useContext(DatasContext);
  const { user} = useContext(AuthContext);
  return (
    <>
      <Container showMenu={showMenu}>
        <div className="header">
          <div className="user-artist">
            <ProfileContent>
              <div className="user">
                {user?.photoURL ? <img
                  src={user?.photoURL!}
                  alt="userImage"
                /> : iconUser}
              </div>
              <div className="userInfo">
                <Link style={{ color: '#333', textDecoration: 'none', fontSize: 18 }} className="nav" to={'/dashboad'}>{user?.displayName ? onlyLetters(user?.displayName) : 'Usuário'}</Link>
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
