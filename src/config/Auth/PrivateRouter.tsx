import React, { FC, useContext} from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { AuthContext } from './AuthContext';
interface props extends RouteProps {
  component: any
}
const PrivateRouter: FC<props> = ({ component: Component, ...rest }) => {
   const { user} = useContext(AuthContext);
  return (
    <Route {...rest} render={props => user?.uid ? <Component {...props} /> : <Redirect to="/" />} />
  )
}
export default PrivateRouter;