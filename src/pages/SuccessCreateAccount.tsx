import {FiCheck} from "react-icons/fi";
import styled from "styled-components";
const SuccessCreateAccount = () => {
	return (
		<Container>
			<CardSuccess>
				 <div className="success-icon">
				 <FiCheck color="#34753a" fontSize={60}/>
				</div>
				<div className="message">
					<h2>Conta activada com sucesso</h2>
				 <a href="/dashboard">Ir para página inical</a>
				</div>
			</CardSuccess>
		</Container>
	);
};

export default SuccessCreateAccount;


export const Container = styled.div`
    width:  100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    z-index:2;
    background:#fff;
	flex-direction: column;
	`

export const CardSuccess = styled.div`
      height:100vh;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
      border-bottom: 2px solid;
      box-shadow:  0px 0px 8px 1px#fff;
	  padding: 40px;
	  .success-icon{
		  height: 200px;
		  width: 200px;
		  border-radius: 50%;
		  border: 1px solid #34753a;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  flex-direction: column;
		
	  }
	  .message{
		  padding: 20px;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  flex-direction: column;
		  h2{
			  color: #555;
			  padding: 10px;
		  }
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