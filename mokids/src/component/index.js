import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import Main from "./main";

function Root(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/main" component={Main}></Route>
        </Switch>
    </BrowserRouter>);
}

export default Root;
