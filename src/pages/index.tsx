import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRouter from '../config/Auth/PrivateRouter';
import Dashboard from "./home";


export default () => (
    <>
    <PrivateRouter exact path="/dashboard" component={Dashboard} />
    </>
);
