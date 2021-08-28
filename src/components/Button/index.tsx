import styled from "styled-components";
import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import colors from '../../styles/colors'
type ButtonPropos = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonPropos) {
    return (
        <Conteinner>
            <button className="" {...props} />
        </Conteinner>
      
    )
}


export const Conteinner = styled.div`
        button{
        background-color: ${colors.orange};
        color: #fff;
        text-align: center;
        transition: filter 0.2s;
        :hover{
            filter: brightness(0.9);
        }
    }
    `
                


