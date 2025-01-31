import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Signupform2() {
    const router = useRouter();
    const [ username, setusername ] = useState('');
    const [ password, setpassword ] = useState('');
    const [ repassword, setrepassword ] = useState('');


    const adduser = async(e) => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      const combinedUserData = { ...userData, username, password, repassword };
      try {
        const response = await pocketbase.create('users', combinedUserData);
        console.log(response);
        localStorage.removeItem('userData');
        // Redirect to success page
        router.push('/signup/success');
      } catch (error) {
        console.error(error);
      }
      router.push('../components/dashboard');
    }

    // async function adduser() {
      
    //   const data = {
    //     "username": username,
    //     "email": email,
    //     "emailVisibility": true,
    //     "password": password,
    //     "passwordConfirm": repassword,
    //     "firstname": firstname,
    //     "lastname": lastname,
    // };
    // try {
    //   const record = await pb.collection('user').create(data);
    //   router.push('../components/dashboard');
    // } catch (error) {
    //   alert('Data error please review your entree');
    // }
    // (optional) send an email verification request
    //await pb.collection('user').requestVerification(semail);
    //}
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
