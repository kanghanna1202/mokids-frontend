import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./style.css";
import {getRequest} from "../../api";
import logo from "../../asset/logo/logo.001.png";

function Main(){
    const [movieData, setMovieData] = useState([]);
    useEffect(()=>{
        getRequest()
        .get("/movie/list/", {})
        .then((res)=>{
            setMovieData(res.data)
            const urls=res.data.map((e)=>e.posterUrl)
            setMovieData(urls)
            console.log(urls)
        })}, [])
    
    return (
        <>
        <div className="mainContainer">
            <header><img src={logo}></img></header>
            <h2>오늘의 영화</h2>
            <div className="movieList">
                {movieData.map((e,i)=><img className="poster" src={e} key={i}></img>)}
            </div>
        </div>
        <div className="mainContainer">
        <h2>장르별 영화</h2>
            <div className="todayMovie">
                <div className="buttonContainer">
                    <button className="genreButton">드라마</button>
                    <button className="genreButton">가족</button>
                    <button className="genreButton">인물</button>
                    <button className="genreButton">코메디</button>
                    <button className="genreButton">뮤직</button>
                    <button className="genreButton">종교</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main
