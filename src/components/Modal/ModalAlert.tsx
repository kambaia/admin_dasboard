import React from "react";
import styled from "styled-components";
export interface Props {
  open?: boolean;
  setShowFindArtist?: (newValue: boolean) => void;
  setOpen?: (newValue: boolean) => void;
  setClearForm?: (newValue: boolean) => void;
  width?: number | any;
  heigth?: number | any;
  loading?: boolean
}

export const Modal: React.FC<Props> = ({
  children,
  loading = true,
  ...props
}) => {
  return (
    <FullScreenModal>
        <Close></Close>
            {children}
    </FullScreenModal>
  );
};

const FullScreenModal = styled.div`
    width: 100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999999;
`
const Close = styled.div`
    width: 100vw;
    height:2vh;
`
