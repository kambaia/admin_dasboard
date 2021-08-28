import React, { FC, useContext} from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { AuthContext } from './AuthContext';
interface props extends RouteProps {
  component: any
}
const PrivateRouter: FC<props> = ({ component: Component, ...rest }) => {
   const { userId} = useContext(AuthContext);
  return (
    <Route {...rest} render={props => userId ? <Component {...props} /> : <Redirect to="/" />} />
  )
}
export default PrivateRouter;