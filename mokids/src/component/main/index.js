import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./style.css";
import {getRequest} from "../../api";
import {useHistory} from "react-router"
import logo from "../../asset/logo/logo.001.png";

function Main(){
    const [movieData, setMovieData] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        getRequest()
        .get("/movie/list/", {})
        .then((res)=>{
            setMovieData(res.data)

        })}, [])

    function onSubmit(e){
        history.push(`genre/${e.target.name}`)
    }
    
    return (
        <>
        <div className="mainContainer">
            <header><img src={logo}></img></header>
            <h2>오늘의 영화</h2>
            <div className="movieList">
                {movieData.map((e,i)=><img className="poster" src={e.posterUrl} key={i} onClick={()=>history.push(`movie/${e.id}`)}></img>)}
            </div>
        </div>
        <div className="mainContainer">
        <h2>장르별 영화</h2>
            <div className="todayMovie">
                <div className="buttonContainer">
                    <button className="genreButton" name="드라마" onClick={onSubmit}>드라마</button>
                    <button className="genreButton" name="가족" onClick={onSubmit}>가족</button>
                    <button className="genreButton" name="인물" onClick={onSubmit}>인물</button>
                    <button className="genreButton" name="코메디" onClick={onSubmit}>코메디</button>
                    <button className="genreButton" name="뮤직" onClick={onSubmit}>뮤직</button>
                    <button className="genreButton" name="종교" onClick={onSubmit}>종교</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main
