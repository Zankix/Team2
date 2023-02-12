import React from 'react'
//import '../pageprops/viewpassword.js'
import VisibilityIcon from '@mui/icons-material/Visibility';
//form for sign up
//will add this user to the database and the ability to login
const viewpassword =() => {
    var x = document.getElementsByName('passinput1');
    var y = document.getElementsByName('passinput2');
    if(x.type === 'password' || y.type === 'password') {
      x.type = 'text';
      y.type = 'text';
    }
    else {
      x.type = 'password'
      y.type = 'password'
    }
}
const passwordmatch = () => {
  var x = document.getElementsByName('passinput1');
  var y = document.getElementsByName('passinput2');
  if (x == y){
  }
  else {
    alert('Passwords do not match');
  }
}
// const [ re]
const Signupform = () => {
  return (
    <form onSubmit="signuphandler" method='POST' name="signup">
        
        <div className="signup">
          <h1>Sign up For A FIT Account</h1>
          {/* sign up infromation added to the database*/}
          <input type='text' name='firstname' placeholder='Enter First Name' id='firstnameinput'/>
          <input type='text' name='lastname' placeholder='Enter Last Name' id='firstlastinput'/>
          <br></br>
          <input type='text' name='email' placeholder='Enter Email' id='emailinput'/>
          <input type='text' name='dob' placeholder='Enter Date Of Birth MM/DD/YYYY' id='dobinput'/>
          <input type='text' name='address' placeholder='Enter Address' id='addressinput'/>
          <input type='text' name='' placeholder='Enter Phone Number' id='phonenumberinput'/>
          <br></br>
          {/* login information that will pulled later for login*/}
          <input type='text' placeholder='Username' id='usernameinput'/>
          <input type="password" placeholder='Password' id='passinput1'/>
          {/* add password re-enter and match with pasinput1 */}
          {/* <input type="password" placeholder='Re Enter Password' id='passinput2'/> */}
          <br></br>
          <input type='checkbox' onClick={()=>viewpassword()}/>Show Password 
          <br></br>
          <input type='submit' name='Sign Up'></input>
        </div>
        
      
      <label>Already have an account?</label>
     
    </form>
    
  )
};
export default Signupform;
// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<signupform/>);

