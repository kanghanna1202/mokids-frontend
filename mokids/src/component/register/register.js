import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./style.css"

function Register(){
    const [id,setId] = useState();
    const [password,setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    function onSubmit(e){
        e.preventDefault();
        alert("회원가입 성공!");
    }
    return (
        <div className="container">
            <div className="box">
                <h1>반가워요!👋</h1>
                <form>
                    <input placeholder="아이디" value={id} onChange={(e)=>setId(e.target.value)}/>
                    <input placeholder="비밀번호" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input placeholder="비밀번호 확인" value={passwordConfirm} onChange={(e)=>setId(e.target.value)}/>
                    <button type="submit" onClick={onSubmit}>확인</button>
                </form>
            </div>
        </div>
    );
}

export default Register
