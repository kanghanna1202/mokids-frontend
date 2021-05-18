import React, {useEffect, useState} from "react";
import "./style.css";
import {getRequest} from "../../api";
import logo from "../../asset/logo/logo.001.png";

function GenreMovie({match}){
    const [movieData, setMovieData] = useState([]);
    //useEffect(()=>{}, [])
    getRequest().post("/genre/", {genre:match.params.name}).then((res)=>{setMovieData(res.data)});
    console.log(match)
    return (
        <>
        <div className="mainContainer">
            <header><img src={logo}></img></header>
            <h2>{match.params.name}</h2>
            <div className="genreMovie">
                {movieData.map((e,i)=><img className="poster"></img>)}
            </div>
        </div>
        </>
    );
}

export default GenreMovie
