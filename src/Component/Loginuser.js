import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from '../App';
import NewPost from './NewPost';


const Loginuser = () => {
    const { user } = useContext(UserContext);
    const [email, setemail] = useState("")
    const [pwd, setpwd] = useState("");
    // const [logindata, setlogindata] = useState("");
    const navigate = useNavigate()

    
        
    function loginbtn() {
        // console.log(user);
        let data = user.find(us => us.email === email && us.password === pwd);
        console.log("data===",data);
       
        if (data) {
            alert("login success...!!")
            // console.log("logindata===",logindata);
            localStorage.setItem('token',  JSON.stringify(data));
            navigate("/posts")
        }
        
        else alert("login again...!!")

        setemail("")
        setpwd("")
        // setlogindata(data)
        // console.log("logindata===",logindata);
    }

    return (
        <div><br />

            <input type="text" value={email} onChange={e => setemail(e.target.value)} placeholder="Enter Email...."/><br /><br />
            <input type="text" value={pwd} onChange={e => setpwd(e.target.value)} placeholder="Enter Password...."/><br /><br />

            <button onClick={loginbtn}>login</button>       
            {/* <UserContext.Provider value={{ logindata }} /> */}
            {/* <LoginContext.Provider value={{ logindata }}/> */}

        </div>
    )
}

export default Loginuser