import React from "react";
import { FullScreen, Container, Close, FullScreenModalLoand} from "./styles";
import { FiX } from "react-icons/fi";

export interface Props {
  open: boolean;
  setOpen: (newValue: boolean) => void;
}

export interface IFullScreen {
  open: boolean;
}

export const Notification: React.FC<Props> = ({
  open,
  setOpen,
  children,
  ...props
}) => {
  return (
    <FullScreen open={open}>
      <Container {...props}>
        {children}
      </Container>
    </FullScreen>
  );
};

