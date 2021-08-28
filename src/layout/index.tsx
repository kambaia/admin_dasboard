import React, { Fragment } from 'react';

import Header from '../components/Header';
import AsideBar from '../components/AsideBar';
import Content from './Content';
export interface Props {
  width?: number | any;
  heigth?: number | any;
}


export const Layout: React.FC<Props> = ({
  children,
  width,
  heigth,
}) => {
  return(
    <Fragment>
      <AsideBar/>
      <Content>
      <Header />
        {children}
      </Content>
    </Fragment>
  )
}


export default Layout;