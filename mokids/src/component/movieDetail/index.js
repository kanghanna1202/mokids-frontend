import React, {useEffect, useState} from "react";
import "./style.css";
import {getRequest} from "../../api";
import logo from "../../asset/logo/logo.001.png";

function MovieDetail({match}){
    const [movieData, setMovieData] = useState([]);
    useEffect(()=>{}, [])
    getRequest().get(`/movie/${match.params.id}`).then((res)=>{setMovieData(res.data)});
    console.log("efkernfkjernfkenrfknkjenkrjfkerjnfkejnrf")
    return (
        <>
        <div className="mainContainer">
            <header><img src={logo}></img></header>
            <h2>영화 세부정보</h2>
            <div className="movieDetail">
                {movieData.map((e,i)=><img className="poster"></img>)}
            </div>
        </div>
        </>
    );
}

export default MovieDetail
