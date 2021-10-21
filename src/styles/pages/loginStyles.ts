import styled, { keyframes, css } from "styled-components";

import colors from '../colors';

export const Container = styled.div`

    #page-create-acount{
        display: flex;
        align-items: stretch;
        height: 100vh;
    }
    
    .bainner{
        flex: 7;
        background-color: ${colors.bg_general};
        color: ${colors.text_color};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 120px 80px;
        img{
            max-width: 520px;
        }
        strong {
            font: 700 35px 'Poppins', sans-serif;
            line-height: 45px;
            margin-top:16px;
            color: ${colors.color_title};
        }
        p{
            color: ${colors.text_color};
            font-size: 24px;
            margin-top:16px;
            text-align: center;
            
         }
        }
    .contnt-form{
        flex: 8;
        color: ${colors.text_color};
        padding: 0 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .main-content{
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 420px;
            align-items: stretch;
            justify-content: center;
            padding: 10px 0;
            .logo{
                width: 100%;
                display: flex;
                 justify-content: center;
                 align-items: center;
                 padding: 20px;
                 border-bottom: 1px solid #ddd;
                img{
                  width: 100px;
            }
            }
            .error-message{
                    padding: 10px 0;
                    span{
                        color: #d00;
                        font-size: 18px;
                    }
                }
            .form{
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: 40px;
				.sigin-google{
					display: flex;
					align-items:center;
					justify-content: center;
				
					span{
					   padding-left: 10px;
					}
				}
                .input{
                        margin: 5px 0px;
                    }
                button, .btn-create {
                    width: 100%;
                    padding: 10px;

                } border-radius:5px;
                    
            }
            .btn-create {
                width: 100%;
                padding: 10px;
                border-radius:5px;
                margin-top: 10px;
                text-align: center;
                color: ${colors.blue};
                transition: filter 0.2s;
                    :hover{
                        filter: brightness(0.9);
                    }
            }
           
        }

    .separetor{
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .separetor div:nth-child(2){
        padding: 10px;
    }
    .separetor div:nth-child(1), .separetor div:nth-child(3) {
        background-color: #ddd;
        height: 1px;
        width: 100%;
    }



    


    
    @media(max-width:1024px){
    .bainner{
        display: none;
    }
    .contnt-form{
        flex: 8;
        color: ${colors.text_color};
        padding: 0 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .main-content{
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 90%;
            align-items: stretch;
            justify-content: center;
            padding: 10px 0;
            .logo{
                width: 100%;
                display: flex;
                 justify-content: center;
                 align-items: center;
                 padding: 10px;
                 border-bottom: 1px solid #ddd;
                img{
                  width: 200px;
            }

            }
    }
}
    @media(max-width:768px){
    .bainner{
        display: none;
    }
    .contnt-form{
        flex: 8;
        color: ${colors.text_color};
        padding: 0 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .main-content{
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 90%;
            align-items: stretch;
            justify-content: center;
            padding: 10px 0;
            .logo{
                width: 100%;
                display: flex;
                 justify-content: center;
                 align-items: center;
                 padding: 10px;
                 border-bottom: 1px solid #ddd;
                img{
                  width: 200px;
            }

            }
    }
  
}
    @media(max-width:630px){
    .bainner{
        display: none;
    }
    .main-content{
            .logo{
                width: 100%;
                display: flex;
                 justify-content: center;
                 align-items: center;
                 padding: 10px;
                 border-bottom: 1px solid #ddd;
                img{
                  width: 100px;
            }
    }
  }
}
    

`


export const Loading = styled.div<{ loading: boolean } >`
   color: ${props => props.loading ? 'white' : 'red'};
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.7;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 1s linear infinite;
      }
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;




