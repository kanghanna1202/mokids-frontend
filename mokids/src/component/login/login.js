import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./style.css"
import {useHistory} from "react-router"
import axios from "axios"

function Login(){
    const [id,setId] = useState();
    const [password,setPassword] = useState();
    const history = useHistory();

    function onSubmit(e){
        e.preventDefault();
        const client= axios.create({
            baseURL: "http://localhost:8000"
        });
        const data={
            username: id, 
            password
        }
        client.post("/user/login/", data)
            .then((res)=>{
                localStorage.setItem("access", res.data.access)
                alert("로그인 성공!")
                history.push("/main")
            ;})
            .catch((err)=>{alert("실패다이말이야")})
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
