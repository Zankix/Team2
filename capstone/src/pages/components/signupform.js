import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NavBar from './NavBar';
import axios from 'axios';
//form for sign up
//will add this user to the database and the ability to login
const viewpassword =() => {
    var x = document.getElementById('passinput1');
    // var y = document.get('passinput2');
    if(x.type === 'password') {
      x.type = 'text';
      // y.type = 'text';
    }
    else {
      x.type = 'password'
      // y.type = 'password'
    }
}
export default function Signupform(){
  const [ firstname, setfirstname ] = useState('');
  const [ lastname, setlastname ] = useState('');
  const [ email, setemail ] = useState('');
  const [ dob, setdob ] = useState('');
  const [ address, setaddress ] = useState('');
  const [ phonenumber, setphonenumber ] = useState('');
  const [ username, setusername ] = useState('');
  const [ password, setpassword ] = useState('');

  const signuphandler = () => {
    axios.post({
      firstname: firstname,
      lastname: lastname,
      email: email,
      dob: dob,
      address: address,
      phonenumber: phonenumber,
      username: username,
      password: password
    
    }).then(() => { alert("Account Created");})
  };
  return (
    <div>
      <NavBar></NavBar>
      {/* <form name="signup" method='post' onSubmit={signuphandler}> */}
        <div>
          <h1>Sign up For A FIT Account</h1>
          {/* sign up infromation added to the database*/}
          <input type='text' name='firstname' placeholder='Enter First Name' onChange={e => setfirstname(e.target.value)} id='firstnameinput'/>
          <input type='text' name='lastname' placeholder='Enter Last Name' onChange={e => setlastname(e.target.value)} id='lastnameinput'/>
          <br></br>
          <input type='text' name='email' placeholder='Enter Email' onChange={e => setemail(e.target.value)} id='emailinput'/>
          <input type='text' name='dob' placeholder='Enter Date Of Birth MM/DD/YYYY' onChange={e => setdob(e.target.value)} id='dobinput'/>
          <input type='text' name='address' placeholder='Enter Address' onChange={e => setaddress(e.target.value)} id='addressinput'/>
          <input type='text' name='phonenumber' placeholder='Enter Phone Number' onChange={e => setphonenumber(e.target.value)} id='phonenumberinput'/>
          <br></br>
          {/* login information that will pulled later for login*/}
          <input type='text' name='username' placeholder='Username' onChange={e => setusername(e.target.value)} id='usernameinput'/>
          <input type="password" name='password' placeholder='Password' onChange={e => setpassword(e.target.value)} id='passinput1'/>
          {/* add password re-enter and match with pasinput1 */}
          {/* <input type="password" placeholder='Re Enter Password' id='passinput2'/> */}
          <br></br>
          <input type='checkbox' onClick={()=>viewpassword()}/>Show Password 
          <br></br>
          <button onClick={signuphandler}>Sign up</button>
          {/* <input type='submit' name='Sign Up' onClick={signuphandler}></input> */}
          </div>
          <label>Already have an account?</label>
        {/* </form> */}
    </div>
    
    
  )
};
// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<signupform/>);

