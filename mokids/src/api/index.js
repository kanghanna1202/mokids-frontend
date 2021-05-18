import axios from "axios"

export const getRequest=()=>{
    
    const client= axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        headers:{
            Authorization:`Bearer ${localStorage.getItem("access")}`
        }
    });
    return client;
}