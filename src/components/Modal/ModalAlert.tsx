import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
export interface Props {
  open?: boolean;
  setShowFindArtist?: (newValue: boolean) => void;
  setOpen?: (newValue: boolean) => void;
  setClearForm?: (newValue: boolean) => void;
  width?: number | any;
  heigth?: number | any;
  loading?: boolean,
}

export const Modal: React.FC<Props> = ({
  children,
  loading = true,
  width= 40,
  ...props
}) => {
  return (
    <FullScreenModal>
         <div className="card-modal" style={{width: `${width}%`}}>
         <Close>
              <div className="close"></div>
         </Close>
            {children}
         </div>
    </FullScreenModal>
  );
};

const FullScreenModal = styled.div`
    width: 100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999999;

    .card-modal{
      background-color: #fff;
      height: auto;
      position: relative;
      
    }
`
const Close = styled.div`
    width: 100%;
    border-bottom: 1px solid ${colors.orange};
    position: absolute;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    font-size: 25px;
    .close{
        background-color: transparent;
        outline: none;
        height: 35px;
        width: 35px;
        border:none;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        cursor: pointer;

        &:before, &:after{
            content: '';
            position: absolute;
            width: 2px;
            height: 20px;
            background-color: #000;
        }
        &:before{
            transform: rotate(45deg);
        }
        &:after{
            transform: rotate(-45deg);
        }
        :hover{
          opacity:.5;
        }
    }
`
