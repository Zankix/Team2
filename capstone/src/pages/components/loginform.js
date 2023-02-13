import React from 'react';
import NavBar from './NavBar';
import { useState } from 'react';
const viewpassword =() => {
  var x = document.getElementById('passinput');
  if(x.type === 'password') {
    x.type = 'text';
  }
  else {
    x.type = 'password'
  }
}
const Loginform = () => {
  const [ loginusername, setloginusername ] = useState('');
  const [ loginpassword, setloginpassword ] = useState('');
  return (
    <div>
      <NavBar></NavBar>
      <form onSubmit="loginhandler" method='POST' name="login">
              <div className="login">
                <h1>Login to FIT</h1>
                {/* login information */}
                <input type='text' name='loginusername' placeholder='Username' onChange={e => setloginusername(e.target.value)} id='usernameinput'/>
                <input type="password" name='loginpassword' placeholder='Password' onChange={e => setloginpassword(e.target.value)} id='passinput'/>
                <br></br>
                <input type='checkbox' onClick={()=>viewpassword()}/>Show Password 
                <br></br>
                <input type='submit' name='Login'></input>
              </div>
            <label>Don't have an account?</label>
          
          </form>
    </div>
    
  )
};
export default Loginform;