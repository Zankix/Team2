import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NavBar from './NavBar';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import Link from "next/link"

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
export default function Signupform(){
  const router = useRouter();
  const [ sfirstname, setfirstname ] = useState('');
  const [ slastname, setlastname ] = useState('');
  const [ semail, setemail ] = useState('');
  const [ sdob, setdob ] = useState('');
  const [ saddress, setaddress ] = useState('');
  const [ sphonenumber, setphonenumber ] = useState('');
  const [ susername, setusername ] = useState('');
  const [ spassword, setpassword ] = useState('');
  const [ srepassword, setrepassword ] = useState('');

  async function adduser() {
    const data = {
      "username": susername,
      "email": semail,
      "emailVisibility": true,
      "password": spassword,
      "passwordConfirm": srepassword,
      "firstname": sfirstname,
      "lastname": slastname,
      "address": saddress,
      "phonenumber": sphonenumber,
      "dob": sdob
  };
  try {
    const record = await pb.collection('user').create(data);
    router.push('../components/dashboard');
  } catch (error) {
    alert('Data error please review your entree');
  }
  // (optional) send an email verification request
  //await pb.collection('user').requestVerification(semail);
  }
  return (
    <html>
    <body name = 'front-background'>
    <div>
      <NavBar></NavBar>
        <div name='signup'>
          <h1>SIGN UP</h1>
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
          <input type="password" name='repassword' placeholder='Re Enter Password' onChange={e => setrepassword(e.target.value)} id='passinput2'/>
          <br></br>
          <input type='checkbox' onClick={()=>viewpassword()}/>Show Password 
          <br></br>
          <button onClick={adduser}>Sign up</button>
          {/* <input type='submit' name='Sign Up' onClick={signuphandler}></input> */}
      <br></br>
        <Link href="../components/Loginform"><label>Already have an account?</label></Link>
        </div>
    </div>
    </body>
    </html>
  )
};
// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<signupform/>);

