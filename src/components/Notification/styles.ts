import styled, { keyframes, css } from 'styled-components'
import colors from "../../styles/colors";

import { IFullScreen } from "./index";

export const FullScreen = styled.div<IFullScreen>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  z-index: 9999;
  animation: fadeModal 380ms ease-in-out 1;
  .modalContent{
   overflow-y:auto;
   padding:10px;
  }
  .modalContent::-webkit-scrollbar {
  width: 5px;
  }
  .modalContent::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
`;
export const Container = styled.div`
  width: 100%;
  height: 8%;
  padding: 20px 0px;
  background-color: ${colors.bg_painel};
  color: #1c1c1c;
  border-radius: 4px;
  position: absolute;
  bottom:10px;
  animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;


      

  @keyframes slideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  color: #c4c4c4;
  h2 {
    color: #1c1c1c;
    margin-bottom: 28px;
  }
`;

export const Close = styled.button`
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.3);
  background: transparent;
  border: 0;
  font-size: 16px;
  &:hover {
    color: #fff;
  }
`;


export const FullScreenModalLoand = styled.main`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    width:100%;
    top:0px;
    left:0;
    bottom:0;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    
    .modalContent{
    overflow-y:auto;
    padding:10px;
  }
    .modalContent::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    /* Handle */
    .modalContent::-webkit-scrollbar-thumb {
    background: #ff2a00; 
    border-radius: 10px;
    }
    @keyframes fadeIn {
      from {
        background-color: rgba(0, 0, 0, 0);
      }
      to {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
`;


