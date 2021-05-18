import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./style.css";
import {getRequest} from "../../api";
import logo from "../../asset/logo/logo.001.png";

function Main(){
    const [movieData, setMovieData] = useState([]);
    useEffect(()=>{}, [])
    getRequest().get("/main/", {}).then((res)=>{setMovieData(res.data)})
    return (
        <div className="mainContainer">
            <header><img src={logo}></img></header>
            <div className="todayMovie">
                <h2>오늘의 영화</h2>
                
            </div>
            <div className="genreMovie"></div>
        </div>
    );
}

export default Main
