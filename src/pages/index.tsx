import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRouter from '../config/Auth/PrivateRouter';
import Books from "./Books";
import ClassRoom from "./ClassRoom";
import Exercises from "./Exercises";
import Dashboard from "./home";
import ListExercise from "./ListExercise";
import Profile from "./Profile";
import Questions from "./Questions";
import Question from "./Question";
import Room from "./Room";
import EditProfile from "./editProfile";
import SuccessCreateAccount from "./SuccessCreateAccount";


export default () => (
    <>
    <PrivateRouter exact path="/dashboard" component={Dashboard} />
	<PrivateRouter exact path="/edit-profile-study" component={EditProfile} />
    <PrivateRouter exact path="/classroom" component={ClassRoom} />
    <PrivateRouter exact path="/room" component={Room} />
    <PrivateRouter exact path="/profile" component={Profile} />
    <PrivateRouter exact path="/exercises" component={Exercises} />
    <PrivateRouter exact path="/exercises/list" component={ListExercise} />
    <PrivateRouter exact path="/books" component={Books} />
    <PrivateRouter exact path="/questions" component={Questions} />
    <PrivateRouter exact path="/classroom/question/:id" component={Question} />
	<PrivateRouter exact path="/auth/account-active-success"  component={SuccessCreateAccount} />
    </>
);
