import React, {useEffect, useState} from "react";
import "./style.css";
import {getRequest} from "../../api";
import logo from "../../asset/logo/logo.001.png";

function MovieDetail({match}){
    const [movieData, setMovieData] = useState({
        posterUrl: "",
        title: "",
        genre: "",
        keywords: "",
        runtime: "",
        plot: ""
    });
    useEffect(()=>{
        getRequest().get(`/movie/${match.params.id}`).then((res)=>{
            setMovieData(res.data)
            console.log(res.data)
        });
    }, [])
    
    return (
        <>
        <div className="mainContainer">
            <div className="movieBackground" style={{backgroundImage:`url(${movieData.posterUrl})`}}></div>
            <header><img src={logo}></img></header>
            <h2>영화 세부정보</h2>
            <div className="movieContainer"  >
                <div className="movieDetail">
                    <img src={movieData.posterUrl}></img>
                    <div>
                        <h3>{movieData.title}</h3>
                        <p>{movieData.genre}</p>
                        <p>{movieData.keywords}</p>
                        <p>{movieData.runtime}</p>
                        <p>{movieData.plot}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MovieDetail
