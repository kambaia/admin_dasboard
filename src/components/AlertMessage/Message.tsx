import React, { useContext, useState, useEffect } from "react";
import Styled from "styled-components";
import { AlertContext } from "../../config/Alert/AlertContextMessage";
import * as AiIcons from "react-icons/ai";
import * as IoIcon from "react-icons/io5";

import color from '../../styles/colors'
import { Overlay, ModalDisable, MOdalFooter, ModalHeader, ModalBody, Cicle} from "./styles"
export default function Message() {
  const { data, showAlert, setShowAlert, setConfirm } = useContext(AlertContext);
  const icon = {
    SUCCESS: <AiIcons.AiOutlineCheck size={50} color={color.green} />,
    WARNING: <IoIcon.IoAlert size={50} color={color.red} />,
    HALP: <AiIcons.AiOutlineQuestion />
  }
  if (data.type === 'success') {
    return (
      <React.Fragment>
        <Overlay show={showAlert} onClick={()=>setShowAlert(false)}>
          <ModalDisable>
            <ModalHeader>
              <span>{data.header}</span>
            </ModalHeader>

            <ModalBody>
              <Cicle cicleColor={color.green}>
                {icon.SUCCESS}
              </Cicle>
            </ModalBody>
            <MOdalFooter>
              <div className="messagem">
                <span>{data.message}</span>
              </div>
            </MOdalFooter>
          </ModalDisable>
        </Overlay>
      </React.Fragment>
    )
} else if (data.type === 'warning') {
    return (
      <React.Fragment>
        <Overlay show={showAlert} >
          <ModalDisable>
            <ModalHeader>
              <span>{data.header}</span>
            </ModalHeader>

            <ModalBody>
              <Cicle cicleColor={color.red}>
                {icon.WARNING}
              </Cicle>
            </ModalBody>
            <MOdalFooter>
              <div className="messagem">
                <span>{data.message}</span>
              </div>
              <div className="confirm-message">
              <button onClick={()=>{setConfirm(false); setShowAlert(false)}}>Apagar</button>
              <button onClick={()=>{setConfirm(true); setShowAlert(false)}}>Cancelar</button>
              </div>
            </MOdalFooter>
          </ModalDisable>
        </Overlay>
      </React.Fragment>
    )
  }
  else if (data.type === 'help') {
    return (
      <React.Fragment>
        <h3>Ola</h3>
      </React.Fragment>
    )
  }
  else {
    return (<></>);
  }
}
