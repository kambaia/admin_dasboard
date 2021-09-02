import React,{useContext}  from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
     width: 100%;
     border: 1px solid #ddd;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     margin-top:15px;
     border-radius: 10px;
     flex: none;
      :hover{
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
      }
      .header{
      width: 100%;
       display: flex;
       justify-content:space-between;
       align-items: stretch;
       height: auto;
       padding: 20px 25px;
     
       .info-team{
         display: flex;
         flex-direction: column; 
         justify-content: center;
         padding: 0 10px;
         h2{
           padding: 10px 0px;
         }
         strong{
           margin-bottom: 10px;
           line-height: 20px;
           text-align: justify;
         }
         p{
           margin-top: 10px;
         }
        }
       .img-team{
         display: flex;
         flex-direction: column; 
         justify-content: center;
         align-items: center;
         padding: 0 10px;
         
         .avatar{
            border-radius: 50%;
            width: 50px;
            height: 50px;
            z-index: 9;
            padding: 10px;
            border: 4px solid #ddd;
            display: flex;
            justify-content: center;
            align-items: center; 
            img{
              width: 100%;
              z-index: 1;
              width: 45px;
              height: 45px;
              border-radius: 50%;
            }
         }
       }
     }

     .footer{
       display: flex;
       justify-content: center;
       align-items: center;
       width: 100%;width: 100%;
       border-top:1px solid #ddd;
       padding: 10px 10px;
       .team-status{
         display: flex;
         justify-content: center;
         align-items: center;
         flex: .1;
         .avatar{
            border-radius: 50%;
            width: 50px;
            height: 50px;
            z-index: 9;
            padding: 10px;
            border: 4px solid #ddd;
            display: flex;
            justify-content: center;
            align-items: center; 
            img{
              width: 100%;
              z-index: 1;
              width: 45px;
              height: 45px;
              border-radius: 50%;
            }
         }
       }
       .info-footer-team{
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         flex: 2;
       
         .send-message{
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            width:100%;
            border-radius:20px;
            border:1px solid #ddd;
            height: auto;
            padding: 6px;
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

         }
         .send {
          width: 30px;
          display: flex;
          justify-content: flex-end;
         }
         
       }
     }
`
