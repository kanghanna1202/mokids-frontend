import React, {useState} from "react";
import {Link} from "react-router-dom"
import {useHistory} from "react-router"
import "./style.css"
import axios from "axios"

function Register(){
    const [id,setId] = useState();
    const [password,setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const history = useHistory();
    function onSubmit(e){
        e.preventDefault();
        if(password !== passwordConfirm) {
            return alert('비밀번호가 달라요!')
        }
        const client= axios.create({
            baseURL: "http://localhost:8000"
        });
        const data={
            username: id, 
            password
        }
        client.post("/user/register/", data)
            .then((res)=>{
                localStorage.setItem("access", res.data.access)
                alert("회원가입 성공!")
                console.log(res.data);
                history.push("/login")
            })
            .catch((err)=>{alert("실패다이말이야")})
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
