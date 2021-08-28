import React, { InputHTMLAttributes, useRef } from "react";
import {Link} from "react-router-dom";
import { IconBaseProps } from "react-icons";
import { FiEdit} from 'react-icons/fi';

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  edit?:boolean;
  onEditeArtist?: (newValue: boolean) => void;
  icon?: React.ComponentType<IconBaseProps>;
}
  const Input: React.FC<InputProps> = ({ icon: Icon, onEditeArtist,edit, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container aria-disabled={true}>
      {Icon && <Icon size={20} />}
      <input ref={inputRef} {...rest}/>
      {edit? <span className="" onClick={() =>{
        if(onEditeArtist){onEditeArtist(true);};
}}><FiEdit to='#'>x</FiEdit></span>:''}
    </Container>
  );
};

export default Input;
