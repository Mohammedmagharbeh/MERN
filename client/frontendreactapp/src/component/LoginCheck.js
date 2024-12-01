import React,{useState} from "react";
import axios from "axios";

const Login=()=>{

const [username,setusername]=useState('')
const [password,setpassword]=useState('')
const [Token,setToken]=useState('')
const [userData,setuserData]=useState(null)


const Loginhandler=async(e)=>{
    e.preventDefault()
    try {
        const res=await axios.post('http://127.0.0.1:5000/api/login',{username,password})
        setToken(res.data.token)
        alert('log done')
    } catch (error) {
        alert('invaled data')
    }
}

return(
    <>
    <h1>
        log in page
    </h1>
    <form onSubmit={Loginhandler}>
    <input type="text" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}} required />
    <input type="text" placeholder="password"  value={password} onChange={(e)=>{setpassword(e.target.value)}} required />
    <button type="submit"> login</button>
    </form>
    </>
)

}






export default Login