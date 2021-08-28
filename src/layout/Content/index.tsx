import React,{ useContext} from 'react';
import Styled from 'styled-components';
import colors from '../../styles/colors';
import { DatasContext } from '../../config/DataShare/DataProvider'

export const Content: React.FC = ({ children })=> {
  const { showMenu} = useContext(DatasContext);
  return <ContainerFluid style={{width: showMenu ? '80vw' : '94vw'}}>
    {children}
    </ContainerFluid>;
  
}

export default Content;

export const ContainerFluid = Styled.main`
  position: absolute;
  right:0;
  height:100vh;
  background-color: ${colors.white};
  
`;

