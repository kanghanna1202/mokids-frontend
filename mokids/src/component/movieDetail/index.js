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
        plot: "",
        watched:false
    });
    const [watched,setWatched]=useState(false)
    useEffect(()=>{
        getRequest().get(`/movie/${match.params.id}`).then((res)=>{
            setMovieData(res.data);
            setWatched(res.data.watched);
        });
    }, [])

    const onclick=async()=>{
        try{
            const {data}=await getRequest().get(`movie/watched/${match.params.id}`);
            setWatched(data.watched)
        }catch{

        }
    }
    
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
                        <div className="watchedButton">
                            <button className="watched" onClick={onclick} style={{backgroundColor: watched==="true"?"#4CAF50":"white"}}>봤어요</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MovieDetail
