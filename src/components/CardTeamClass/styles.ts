import React,{useContext}  from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
     width: 400px;
     border: 1px solid #ddd;
     display: flex;
     flex-direction: column;
     margin-left: 20px;
     margin-right: 20px;
     margin-top:15px;
     border-radius: 10px;
     flex: none;
     a{
        text-decoration: none;
        color:#333;
      }
      :hover{
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
      }
     .header{
       display: flex;
       justify-content: space-around;
       align-items: stretch;
       height: 140px;
       width: 100%;
       .info-team{
         flex: 4;
         display: flex;
         flex-direction: column; 
         justify-content: center;
         padding: 0 10px;
         h2{
           padding: 10px 0px;
         }
        }
       .img-team{
         flex: 1;
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
       justify-content: space-between;
       align-items: stretch;
       height: 50px;
       width: 100%;width: 100%;
       border-top:1px solid #ddd;

       .team-status{
         display: flex;
         justify-content: center;
         align-items: center;
         flex: 1;
         
         div{
           width: 10px;
           height: 10px;
           border-radius: 50%;
           background-color: ${colors.green};

         }
       }
       .info-footer-team{
         flex: 8;
         display: flex;
         flex-direction: row;
         justify-content: flex-end;
         align-items: flex-end;
         padding: 20px;
         div{
           margin-left: 10px;
         }

       }
     }
`
