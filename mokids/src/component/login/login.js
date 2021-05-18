import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./style.css"
import {getRequest} from "../../api"

function Login(){
    const [id,setId] = useState();
    const [password,setPassword] = useState();

    function onSubmit(e){
        e.preventDefault();
        getRequest().post("/login/", {id, password}).then(()=>{alert("로그인 성공!");})
    }
    return (
        <div className="container">
            <div className="box">
                <h1>시작하기😆</h1>
                <form>
                    <input placeholder="아이디" value={id} onChange={(e)=>setId(e.target.value)}/>
                    <input placeholder="비밀번호" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" onClick={onSubmit}>확인</button>
                </form>
                <Link to = "/register" className="link">회원가입</Link>
            </div>
        </div>
    );
}

export default Login
