import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NavBar from './NavBar';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';

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
const clear =() =>{
  document.getElementById('firstnameinput').value ='';
  document.getElementById('lastnameinput').value ='';
  document.getElementById('emailinput').value ='';
}
export default function Signupform(){
  const router = useRouter();
  const [ firstname, setfirstname ] = useState('');
  const [ lastname, setlastname ] = useState('');
  const [ email, setemail ] = useState('');

  
  const nextpart = async(e) => {
    e.preventDefault();
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('email', email);
    router.push('./Signupform2');
  }
  

  async function adduser() {
    const data = {
      "email": email,
      "emailVisibility": true,
      "firstname": firstname,
      "lastname": lastname,
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
    <div>
      <NavBar></NavBar>
        <div name='signup'>
          <h1>Sign up For A FIT Account</h1>
          {/* sign up infromation added to the database part 1*/}
          <label>
            First Name: 
           <input type='text' name='firstname' placeholder='Enter First Name' onChange={e => setfirstname(e.target.value)} id='firstnameinput'/>
          </label>
          <br></br>
          <label>
            Last Name:
            <input type='text' name='lastname' placeholder='Enter Last Name' onChange={e => setlastname(e.target.value)} id='lastnameinput'/>
          </label>
         <br></br>
          <label>
            Email: 
            <input type='text' name='email' placeholder='Enter Email' onChange={e => setemail(e.target.value)} id='emailinput'/>
           </label>
          
          <br></br>
          <button onClick={clear}>Clear</button>
          <button onClick={nextpart}>Next</button>
          {/* login information that will pulled later for login*/}
         
          {/* <input type='submit' name='Sign Up' onClick={signuphandler}></input> */}
        </div>
    </div>
    
    
  )
};
// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<signupform/>);

