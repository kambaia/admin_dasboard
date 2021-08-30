import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRouter from '../config/Auth/PrivateRouter';
import ClassRoom from "./ClassRoom";
import Dashboard from "./home";
import Room from "./Room";


export default () => (
    <>
    <PrivateRouter exact path="/dashboard" component={Dashboard} />
    <PrivateRouter exact path="/classroom" component={ClassRoom} />
    <PrivateRouter exact path="/room" component={Room} />
    </>
);
