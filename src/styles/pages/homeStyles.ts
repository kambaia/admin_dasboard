import styled, { keyframes, css } from "styled-components";
import colors from "../colors";
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  margin-top: 10px;
  cursor: pointer;
  > span {
    margin-left: 5px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const CardContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
   grid-gap: 5px;
   padding:20px 25px;
   
`;

export const Card = styled.div`
  background: #03D29F;
  position: relative;
  flex: 1;
  max-width: 450px;
  height: 150px;
  margin: 10px 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display:flex;
  align-items: center;
  justify-content: center;

  .box{
    font-size:20px;
    width:100%;
    padding:1px;
    h1{
      font-size:1.3em;
      padding:10px;
      color: #fff;
    }
    h3{
      font-size:0.8em;
      padding:10px;
      color: #fff;
    }

  }
  
  .icon-case{
    width:25%;
    display:flex;
    justify-content:center;
    text-align:center;
    padding:10PX;
  }

 
  @media only screen and (max-width:1189px){
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5px;
    background-color: #2196F3;
    padding: 10px;
    justify-self: center;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const FigureContainer = styled.div`
  width: 100%;
  min-height:60vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  margin:1px auto;
  padding:10px;
  border-top:1px solid #ddd;
  @media screen and (max-width:1050px){
    width: 100%;
    min-height:60vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    margin:1px auto;
    padding:10px;
    border-top:1px solid #ddd;
  
  }
  @media screen and (max-width:940px){
    width:100%;
   
  }
  @media screen and (max-width:530px){
    width:100%;
   
  }
`;

export const Content = styled.section`
  display:flex;
  width:100%;
  margin:auto;

 @media screen and (max-width:1050px){
       width:100%;
  }
  @media screen and (max-width:940px){
    margin:auto;
    width:100%;
    display: block;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width:530px){
    margin:auto;
    width:100%;
    display: block;
    justify-content: center;
    flex-direction: column;
  }

`

export const CadBodyMusic = styled.fieldset`
   flex:5;
   width:50%;
   background-color:${colors.white};
   border:1px solid #ddd;
   box-shadow:0 2px 5px 0px rgba(0, 0, 0,0.1), 0 2px 4px 0 rgba(0, 0, 0,0.2);
   margin:0px 40px 0px 10px;
   padding:0px 20px;
  .title-table{
    display:flex;
    justify-content:space-between;
    padding:15px 10px;
    border-bottom:2px solid #ddd;
    font-size:16px;
    span a {
      text-decoration:none;
      color:${colors.blue};
    }
    h2{
      font-size:1em;
    }
  } 
  @media screen and (max-width:1050px){
    width: 50%;
  }
  @media screen and (max-width:940px){
    margin:auto;
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width:530px){
    margin:auto;
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;


export const CadBodyprovinces = styled.fieldset`
   flex:4;
   background-color:${colors.white};
   border:1px solid #ddd;
   box-shadow:0 2px 5px 0px rgba(0, 0, 0,0.1), 0 2px 4px 0 rgba(0, 0, 0,0.2);
   padding:0px 20px;
  
   .title-table{
    display:flex;
    justify-content:space-between;
    padding:15px 10px;
    border-bottom:2px solid #ddd;
    font-size:16px;
    span a {
      text-decoration:none;
      color:#555;
    }
    h2{
      font-size:1em;
    }
   }


   @media screen and (max-width:1050px){
    width: 50%;
    margin:5px auto;
  }
  @media screen and (max-width:940px){
    position:relative;
    width:100%;
    top:10px;
  }
  @media screen and (max-width:530px){
    margin:auto;
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const TableContainer = styled.div`
  background-color: transparent;
  margin: 10px 0;
  height: 92%;
  overflow-y: auto;

  table,
  th,
  td {
    border-bottom: 1px solid #ddd;
    border-collapse: collapse;
    font-size: 1rem;
    text-align: left;
  }
  table {
    width: 100%;
    border: none;
  }

  .table-header th {
    font-weight: 400;
    text-align: left;
    background-color: #ddd;
  }
  td,
  th {
    padding: 15px 0;
    @media print {
      padding: 15px 0;
    }
  }
  td {
    max-width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 15px 10px 15px 0px;
  }
`;
export const ContentNotification = styled.div<{show: boolean}>` 
  display: flex;
  justify-content:space-around;
  align-items: center;
  cursor: pointer;
  .close-notification{
    display:flex;
    justify-content:center;
    align-items: center;
    width:5%;
    position:absolute;
    right:0em;
    bottom: 18px;
    height:30px;
    width:30px;
    text-align: center;
    border-radius:50%;
    :hover{
      color:#fff;
      opacity:0.7;
    }
  }
  .info-notification{
    width:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    span{
      color:#d00;
      font-size: 1.2em;
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


