import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./style.css";
import {getRequest} from "../../api";
import logo from "../../asset/logo/logo.001.png";

function Main(){
    const [movieData, setMovieData] = useState([]);
    useEffect(()=>{}, [])
    getRequest().get("/movie/list/", {}).then((res)=>{setMovieData(res.data)})
    return (
        <>
        <div className="mainContainer">
            <header><img src={logo}></img></header>
            <h2>오늘의 영화</h2>
            <div className="todayMovie">
                {movieData.map((e,i)=><img className="poster"></img>)}
            </div>
        </div>
        <div className="mainContainer">
        <h2>장르별 영화</h2>
            <div className="todayMovie">
                <div className="buttonContainer">
                    <button className="genreButton">가족</button>
                    <button className="genreButton">판타지</button>
                    <button className="genreButton">감동</button>
                    <button className="genreButton">코미디</button>
                    <button className="genreButton">액션</button>
                    <button className="genreButton">스포츠</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main
