import React from 'react'

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
  return (
    <form onSubmit="loginhandler" method='POST' name="login">
        
        <div className="login">
          <h1>Login to FIT</h1>
          {/* login information */}
          <input type='text' placeholder='Username' id='usernameinput'/>
          
          <input type="password" placeholder='Password' id='passinput'/>
          <br></br>
          <input type='checkbox' onClick={()=>viewpassword()}/>Show Password 
          <br></br>
          <input type='submit' name='Sign Up'></input>
        </div>
      <label>Don't have an account?</label>
     
    </form>
  )
};
export default Loginform;