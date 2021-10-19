import styled, { keyframes, css } from "styled-components";
import colors from "../colors";

export const CadAnswer = styled.div`
    box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.3);
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .user-header{
        width: 100%;
        padding: 20px 20px;
        border-bottom:1px solid #ddd;
        display: flex;
        flex-direction: row;
        span{
            font-size: 2.5em;
        }
        h3{
            font-size: 1em;
            width: 100%;
            margin-left:20px;
        }
    }

    .anwser{
        width: 100%;
        text-align: justify;
        padding: 20px 30px;
        p{
            font-size: 1.5rem;
            
        }
    }

    .footer-anwser{
        width: 100%;
        padding: 20px 0px;
        border-bottom:1px solid #ddd;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        .incon-option{
            display: flex;
            justify-content: flex-end;
            padding: 10px;
            span{
                padding: 0px 10px;
                background-color: #ddd;margin: 0px 10px 0px 0px;
                border-radius: 30px;
                padding: 6px 10px;
                display: flex;
                align-items: center;
                font-size: 1em;
                cursor: pointer;
                opacity: 1;
                :hover{
                    opacity: .7;
                }
            }
        }


        .send-message{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
            padding: 2px;
            margin-left: 10px;
            width: 70%;
            border:1px solid #ddd;
            height: auto;
          
            textarea {
            outline: none;
            width: 100%;
            resize: none;
            background: transparent;
            margin-top: 20px 0px;
            padding: 10px;
            height: 40px;
            border-radius: 0.8rem 0.8rem 0 0.8rem;
         
          }
          .header-questions form textarea::placeholder {
            color: #333;
          }
            .send {
            width: 45px;
            display: flex;
            justify-content: flex-end;
            } 
         }
        
    }
    
`