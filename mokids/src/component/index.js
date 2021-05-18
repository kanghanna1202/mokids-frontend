import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import Main from "./main";
import GenreMovie from "./genreMovie";

function Root(){
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/main" component={Main}></Route>
            <Route exact path="/genre/:name" component={GenreMovie}></Route>
        </Switch>
    </BrowserRouter>);
}

export default Root;
