import React, { useState } from 'react';
import Axios from 'axios';

import { useNavigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const Loginform =()=> {
    // const [usernameReg, setUsernameReg] = useState("");
    // const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("")

    // const register = () => {
    //     Axios.post('http://localhost3001/register', {
    //         username: usernameReg, 
    //         password: passwordReg,
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // };
    const navigate = useNavigate();
    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username, 
            password: password,
        }).then((response) => {
            if (response.message) {
                
                setLoginStatus(response.data.message);
            } else {
                navigate(<MainLayout/>);
            }
        });
    }; 

  return (
    <div className='loginform'>
        <div className='login'>
            <h1>Login</h1>
            <label>username</label>
            <input 
                type="text" 
                placeholder='username' 
                onChange={(e)=> {
                setUsername(e.target.value)}}/>
            <label>password</label>
            <input 
                type="text"  
                placeholder='password' 
                onChange={(e)=> {
                setPassword(e.target.value)}}/>
            <button onClick={login}> login </button>
        </div>
        <h1>{loginStatus}</h1>
        //add on click event to register
        {/* <div className='registration'>
            <h1>registration</h1>
            <label>username</label>
            <input 
                type="text" 
                onChange={(e)=> {
                setUsernameReg(e.target.value)}}/>
            <label>password</label>
            <input 
                type="text" 
                onChange={(e)=> {
                setPasswordReg(e.target.value)}}/>
            <button> register </button>
        </div> */}
    </div>
    
  );
}

export default Loginform;
