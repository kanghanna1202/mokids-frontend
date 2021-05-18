import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./style.css"
import axios from "axios"

function Register(){
    const [id,setId] = useState();
    const [password,setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    function onSubmit(e){
        e.preventDefault();
        if(password !== passwordConfirm) {
            return alert('비밀번호가 달라요!')
          }
        axios.post("http://127.0.0.1:8000/register/", {id, password}).then(()=>{alert("회원가입 성공!");})
    }
    return (
        <div className="container">
            <div className="box">
                <h1>반가워요!👋</h1>
                <form>
                    <input placeholder="아이디" value={id} onChange={(e)=>setId(e.target.value)}/>
                    <input placeholder="비밀번호" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input placeholder="비밀번호 확인" type="password" value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)}/>
                    <button type="submit" onClick={onSubmit}>확인</button>
                </form>
            </div>
        </div>
    );
}

export default Register
