import React from 'react';
import NavBar from './NavBar';
import { useState } from 'react';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import Link from "next/link"



const viewpassword =() => {
  var x = document.getElementById('passinput');
  if(x.type === 'password') {
    x.type = 'text';
  }
  else {
    x.type = 'password'
  }
}
export default function Loginform(){
  const router = useRouter();
  const [ loginusername, getloginusername ] = useState('');
  const [ loginpassword, getloginpassword ] = useState('');
  
  async function login(){
    const pb = new PocketBase('http://127.0.0.1:8090');
      try {
        const authData = await pb.collection('user').authWithPassword(loginusername,loginpassword);
        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);
        router.push('../components/dashboard');
        // "logout" the last authenticated account
        pb.authStore.clear();
        
      } catch (error) {
        alert("Username or Password is Incorrect");
      }
      
  }
  return (
    <body name = 'front-background'>
    <div>
      <NavBar></NavBar> 
        <div name='signup'>
          <h1>LOGIN</h1>
          {/* login information */}
          <input type='text' name='loginusername' placeholder='Username' onChange={e => getloginusername(e.target.value)} id='usernameinput'/>
          <input type="password" name='loginpassword' placeholder='Password' onChange={e => getloginpassword(e.target.value)} id='passinput'/>
          <br></br>
          <input type='checkbox' onClick={()=>viewpassword()}/>Show Password 
          <br></br>
          <button onClick={login}>Login</button>
          <br></br>
        <Link href="../components/Signupform"><label>Don't have an account?</label></Link>
        </div>
    </div></body>
  )
};
