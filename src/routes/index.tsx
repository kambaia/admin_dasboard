import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/signIn";
import Signup from "../pages/signup";
import Pages from "../pages";
import Layout from '../layout';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={Signup} />
    <Layout>
       <Pages/>
    </Layout>
  </Switch>
);
export default Routes;