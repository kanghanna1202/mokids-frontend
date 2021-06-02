import React, {useEffect, useState} from "react";
import "./style.css";
import logo from "../../asset/logo/logo.001.png";
import {useHistory}from "react-router"
import {getRequest} from "../../api";

function GenreMovie({match}){
    const [movieData, setMovieData] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        getRequest()
        .post("/movie/genre/",{genre:match.params.name})
        .then((res)=>{
            setMovieData(res.data)
        });
    }, [])

    return (
        <>
        <div className="mainContainer">
            <header><img src={logo}></img></header>
            <h2>{match.params.name}</h2>
            <div className="genreMovie">
                {movieData.map((e,i)=><img className="poster" src={e.posterUrl} key={i} onClick={()=>history.push(`/movie/${e.id}`)}>
                </img>)}
            </div>
        </div>
        </>
    );
}

export default GenreMovie
