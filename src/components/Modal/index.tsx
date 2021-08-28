import React from "react";
import { FullScreenModalLoand} from "./styles";
export interface Props {
  open: boolean;
  setShowFindArtist?: (newValue: boolean) => void;
  setOpen: (newValue: boolean) => void;
  setClearForm?: (newValue: boolean) => void;
  width?: number | any;
  heigth?: number | any;
  loading?: boolean
}

export const ModalLoand: React.FC<Props> = ({
  children,
  loading = true,
  ...props
}) => {
  return (
    <FullScreenModalLoand>
            {children}
    </FullScreenModalLoand>
  );
};
