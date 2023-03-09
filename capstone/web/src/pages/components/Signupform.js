import { useState } from 'react'; 
import VisibilityIcon from '@mui/icons-material/Visibility'; 
import PocketBase from 'pocketbase'; 
import { useRouter } from 'next/router'; 
import Link from "next/link" 
import NavBar from './NavBar'
 
const pb = new PocketBase('http://127.0.0.1:8090'); 


const clearinput = () => {
  document.getElementById('firstnameinput').value = '';
  document.getElementById('lastnameinput').value = '';
  document.getElementById('emailinput').value = '';
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
 
  return ( 
    <html> 
    <body> 
    <div> 
      <NavBar></NavBar>
        <div name='signup'> 
          <h1>SIGN UP</h1> 
          {/* sign up infromation added to the database*/} 
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
          <button onClick={clearinput}>Clear</button>
          <button onClick={nextpart}>Next</button> 
      <br></br> 
        <Link href="../components/Loginform"><label>Already have an account?</label></Link> 
        </div> 
    </div> 
    </body> 
    </html> 
  )}; 