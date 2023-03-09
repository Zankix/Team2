import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PocketBase from 'pocketbase'; 
const pb = new PocketBase('http://127.0.0.1:8090'); 


//form for sign up 
const viewpassword =() => { 
  var x = document.getElementById('passinput1'); 
  var y = document.getElementById('passinput2'); 
  if(x.type === 'password') { 
    x.type = 'text'; 
    y.type = 'text'; 
  } 
  else { 
    x.type = 'password' 
    y.type = 'password' 
  } 
} 

export default function Signupform2() {
    const router = useRouter();
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    const email = localStorage.getItem('email');
    const [ username, setusername ] = useState('');
    const [ password, setpassword ] = useState('');
    const [ repassword, setrepassword ] = useState('');

    const adduser = async (e) => {
      e.preventDefault();
      const data = {
        "username": username,
        "email": email,
        "emailVisibility": true,
        "password": password,
        "passwordConfirm": repassword,
        "firstname": firstname,
        "lastname": lastname,
      };
      try {
        const record = await pb.collection('user').create(data);
        localStorage.clear();
        router.push('../components/dashboard');
      } catch (error) {
        localStorage.clear();
        router.push('./Signupform');
        alert('Data error please review your entry.');
      }
    };


  return (
    <div name='signup'>
      <input type='text' name='username' placeholder='Username' onChange={e => setusername(e.target.value)} id='usernameinput'/>
      <input type="password" name='password' placeholder='Password' onChange={e => setpassword(e.target.value)} id='passinput1'/>
      {/* add password re-enter and match with pasinput1 */}
      <input type="password" name='repassword' placeholder='Re Enter Password' onChange={e => setrepassword(e.target.value)} id='passinput2'/>
      <br></br>
      <input type='checkbox' onClick={()=>viewpassword()}/>Show Password 
      <br></br>
      <button onClick={adduser}>Sign up</button>
    </div>
  )
}
