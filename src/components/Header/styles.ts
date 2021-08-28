import React,{useContext}  from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div<{ showMenu: boolean } >`
  background-color: ${colors.white};
  position:fixed;
  right:0px;
  top:0px;
  max-width:${props => props.showMenu? '81vw' : '94vw'};
  width:  ${props => props.showMenu? '81vw' : '94vw'};
  height:8vh;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid #ddd;
 z-index:1;
  .header{
    width:98%;
    display: flex;
    align-items:center;
    .user-artist{
      flex:1;
      display: flex;
      justify-content:flex-end;
      align-items: center;
    }
  }


  @media screen and (max-width:1050px){
    background-color: ${colors.white};
    position:fixed;
    right:0;
    width:81vw;
    height:10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  
    z-index:1;
    .header{
    width:98%;
    display: flex;
    align-items:center;
    .user-artist{
      flex:3;
      display: flex;
      align-items: center;
      width:100%;
    }
  }
  }


`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content:flex-end;
  align-items:center;
  height:50px;
  width:90%;
   
   .user{
     margin-left:10px;
     img{
     top:0;
     left:0;
     right: 0;
     width:40px;
     height:40px;
     border-radius:50%;
   }
   }
   .userInfo{
    margin-left:10px;
    display: flex;
    flex-direction:column;
    span{
      font-size:15x;
      color:#000;
    }
   }


   @media screen and (max-width:1050px){
      display: flex;
      justify-content:flex-end;
      align-items:center;
      height:50px;
      width:98%;
      margin:auto;
    .user{
      img{
      top:0;
      left:20px;
      width:50px;
      height:50px;
      border-radius:50%;
     
    }
  }
 
}

  @media screen and (max-width:940px){

   .user{
     margin-left:10px;
     img{
     top:0;
     left:0;
     width:50px;
     height:50px;
     border-radius:50%;
   }
   }
    
  }
  @media screen and (max-width:530px){
    .userInfo{
      display:none;
    }
`;

export const Menu = styled.div`
  
`
