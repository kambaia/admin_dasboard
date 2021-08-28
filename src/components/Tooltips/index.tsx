import React,{FC} from 'react';
import Styled from 'styled-components';
import colors from '../../styles/colors'

export const ContainerFluid = Styled.main`
   display: inline-flex;

   >.icon{
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    >.icon span{
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    >.icon span p{
    line-height: 40px;
    font-size: 25px;
    }
  > .icon .tooltip{
    position: absolute;
    top: 0;
    right:-10px;
    z-index: 30;
    color: #fff;
    padding: 10px 18px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 25px;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    width: 180px;
    z-index: 20;
    }
    >.icon:hover .tooltip{
    top: -70px;
    opacity: 1;
    pointer-events: auto;
    z-index: 20;
    }
    .icon .tooltip:before{
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%) rotate(45deg);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 20;
    }
    >.icon:hover span{
    color: #fff;
    }
    >.icon:hover span,
    >.icon:hover .tooltip{
    text-shadow: 0px -1px 0px rgba(0,0,0,0.4);
    }
    >.color-icon:hover span,
    >.color-icon:hover .tooltip,
    >.color-icon:hover .tooltip:before{
    background: #555;
    }
`;
interface MessagePros {
  msg: string;
  color?:string
}
const Tooltips: FC<MessagePros> = ({children ,msg, color})=>{
  return <ContainerFluid>
    <div className="icon color-icon">
      <div className="tooltip">
        {msg}
      </div>
      <span><p className={`${color} fab color-icon`}>{children}</p></span>
    </div>
  </ContainerFluid>;

}

export default Tooltips;
