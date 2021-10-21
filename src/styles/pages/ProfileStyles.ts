import styled from 'styled-components'
//import bainner_header from '../../assets/bainner.jpg';

export const CardContent = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   height: auto;
   .content-btn-update{
	   background-color: #f00;
   }
`


export const ContentWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`


export const ProfileStudante = styled.div`
    width: 38%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding-bottom: 40px;
    box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.3);
	.select-option{
	           margin-left: 10px;
                flex: 5;
                display: flex;
                align-items: center;
                select{
                    color: #555;
                    font-size: 16pt;
                    width: 100%;
					background-color: #fff;
					font-size: 12pt;
                }
   }

    .profile-avatar{
        width: 80%;
        padding: 30px 20px;
        .avatar{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0px;
    
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .profile-name{
            padding: 10px;
        }
    }

    .info-estudent{
        width: 90%;
        li{
            list-style: none;
            border:1px solid #ddd;
			font-size: 12pt;
            display: flex;
            align-items: center;
            justify-content: space-between;
			margin-top: 10px;
			padding-right: 10px;
		
            strong{
                flex: 3;
				border: 1px solid #ddd;
				padding: 10px 10px;
            }
            span{
                margin-left: 10px;
                flex: 5;
                display: flex;
                align-items: center;
                font-size: 12pt;
                input{
					font-size: 12pt;
                    color: #555;
                    font-size: 1em;
                    width: 100%;
                   
                }
            }
        }
        .btn-update{
            display: flex;
            justify-content: flex-end;
            padding: 10px 0px;
            button{
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }



`

export const CardInformation = styled.div`
   padding: 20px;
   box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.3);
   border-radius: 10px;
   margin-top: 20px;
   height: auto;
   .header-info{
       border-bottom: 1px solid #ddd;
       padding: 10px;
   }
   .body-info{
    padding: 10px;
    li{
            list-style: none;
            border:1px solid #ddd;
            font-size: 12pt;
            display: flex;
            align-items: center;
            justify-content: space-between;
			margin-top: 10px;
			padding-right: 10px;
            strong{
                flex: 1.2;
				border: 1px solid #ddd;
				padding: 10px 10px;
            }
            span{
                margin-left: 10px;
                flex: 5;
                display: flex;
                align-items: center;
                font-size: 12pt;
                input{
                    color: #555;
                    font-size: 1em;
                    width: 100%;
                }
            }
   }
   .select-option{
	           margin-left: 10px;
                flex: 5;
                display: flex;
                align-items: center;
                select{
                    color: #555;
                    font-size: 16pt;
                    width: 100%;
					background-color: #fff;
					font-size: 12pt;
                }
   }
  
}

`

export const ContentUpdate = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   .btn-update{
            display: flex;
            justify-content: flex-end;
            padding: 10px 0px;
		
            button{
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
				width: 10em;
				font-size: 12pt;
            }
        }
`;

