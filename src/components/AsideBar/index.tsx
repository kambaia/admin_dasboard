import React, { useContext } from "react";
import {
  FiLogOut,
  FiGrid,
  FiUser,
} from "react-icons/fi";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineWechat, AiOutlinePullRequest} from "react-icons/ai";
import {FaRegAddressBook, FaBookReader} from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom';
import { SignOut } from '../../services/authUser';
import { DatasContext } from "../../config/DataShare/DataProvider";
import logo from '../../assets/logo.png';
import colors from "../../styles/colors";
const AsideBar: React.FC = () => {
  const history = useHistory();
  const { showMenu, setShowMenu } = useContext(DatasContext);
  const logOutArtist = () => {
    SignOut();
    history.push('/');
  }
  function onShowShMenu(e: any) {
    e.preventDefault();
    setShowMenu(!showMenu);
  }
  return (
    <>
      <Container showMenu={showMenu!}>
        <Menu showMenu={showMenu}>
          <img style={{ display: showMenu ? 'block' : 'none' }} src={logo} alt="Toqueplay Logo" />
          <div onClick={onShowShMenu} className="menu-bar"><AiOutlineMenu size={25} className="icon__menu" /></div>
        </Menu >
        <div className="menu-options">
          {console.log(showMenu)}
          <ul>
            <Link to="/dashboard">
              <li className="active">
                <FiGrid className="icon__menu" />
                <span className="menu-title">Dashboard</span>
              </li>
            </Link>
            <Link to="/add-sigle">
              <li className="active">
                <FaBookReader className="icon__menu" />
                <span className="menu-title">Livros</span>
              </li>
            </Link>

            <Link to="/#">
              <li className="active">
                <FaRegAddressBook className="icon__menu" />
                <span className="menu-title">Exercícios</span>
              </li>
            </Link>

            <Link to="/classroom">
              <li className="active">
                <AiOutlineWechat className="icon__menu" />
                <span className="menu-title">Salas de Bate Papo</span>
              </li>
            </Link>
            <Link to="/#">
              <li className="active">
                <AiOutlinePullRequest className="icon__menu" />
                <span className="menu-title">Perguntas já feitas</span>
              </li>
            </Link>


            <Link to="/#">
              <li className="active">
                <FiUser className="icon__menu" />
                <span className="menu-title">Perfil do usuário</span>
              </li>
            </Link>

         

            <Link to="#" onClick={() => logOutArtist()}>
              <li className="active">
                <FiLogOut className="icon__menu" />
                <span className="menu-title">Sair</span>
              </li>
            </Link>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default AsideBar;


export const Container = styled.div<{showMenu: boolean }>`
    position: fixed;
    width:  ${props => props.showMenu ? '19vw' : '6vw'};
    min-height:100vh;
    display:flex;
    flex-direction:column;
    z-index:2;
    background:#fff;
    
    
    .menu-options{
      width:100%;
      box-shadow:  0px 0px 8px #fff;
      display: flex;
      align-items: stretch;
      height: 100vh;
    
     
      ul {
          margin: 2rem 0em;
          width: 100%;
        }
        ul li {
          padding: 10px 30px;
          margin-top: 10px;
          display:flex;
          .menu-title{
            
            display: ${props => props.showMenu ? 'flex' : 'none'};
           
          }
          &:hover {
            background-color: #eaf0fb;
            cursor: pointer;
          }
          
        }
       ul a {
          color: #555;
          font-weight: 100;
          text-align: left;
          text-decoration: none;
          &:hover {
            color: #555;
            font-weight: 100;
          }
        }
        .icon__menu {
          margin-right: 7px;
          font-size: 20px;
        }
    }

  .menu__lateral {
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }

  @media (max-width:1020px){
      position: fixed;
      width:10vw;
      display:flex;
      flex-direction:column;
      z-index:2;
      border-right:1px solid #ddd;
      align-items: center;
    .menu-options ul a li {
       font-size:20px;
    .menu-options ul a li{
      display:flex;
      align-items: center;
      flex-direction: column;
      
    }
       .icon__menu{
         font-size:1.3em;
       }
       .menu-options ul a li span{
       display:none;
       
    }
  }
  }
  @media screen and (max-width:940px){
    width:19vw;
    .menu-options ul a li{
      display:flex;
      align-items: center;
      flex-direction: column;
    }
    .menu-options ul a li span{
    
       display:none;
       .icon__menu{
         font-size:1em;
       }
      
    }
  }
  @media screen and (max-width:530px){
    width:19vw;
    .menu-options ul a li{
      text-align:center;
       .icon__menu{
         font-size:0.8em;
       }
    }
    .menu-options ul a li span{
       display:none;
    }
  }
  
`;

export const Menu = styled.div<{ showMenu: boolean }>`
      height:8vh;
      display:flex;
      align-items:center;
      justify-content: space-between;
      border-bottom: 2px solid ${colors.orange};
      box-shadow:  0px 0px 8px 1px#fff;
   
      img {
        width: 60px;
        height: 60px;
        margin-right: 30px;
        margin-left: 25px;
        padding: 8px;
     
      }
    .menu-bar{
      cursor: pointer;
      margin-left: ${props => props.showMenu ? 0: 25}px;
    }

  @media screen and (max-width:1050px){
       font-size:18px;
       > img {
     display:none;
      }
    .menu-bar{
      margin:0px 15px;
      cursor: pointer;
    }
  }
  @media screen and (max-width:940px){
    .menu-options ul a li span{
       display:none;
      
    }
  }
  @media screen and (max-width:530px){
    .menu-options ul a li{
       text-align:center;
    }
    .menu-options ul a li span{
       display:none;
    }
  }
  

`