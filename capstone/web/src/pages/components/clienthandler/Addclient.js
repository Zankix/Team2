import React, { useEffect, useState } from 'react'
import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import Clientdata from './Clientdata';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function Addclient() {
  

    const router = useRouter();
    const [ firstname , setfirstname ] = useState('');
    const [ lastname , setlastname ] = useState('');
    const [ age , setage ] = useState('');
    const [ height , setheight ] = useState('');
    const [ weight , setweight ] = useState('');
    const [ phonenumber, setphonenumber ] = useState('');
    const [ email , setemail ] = useState('');
    // "2022-01-01 00:00:00.123Z"
    async function addclient(){
        const data = {
            "firstname": firstname,
            "lastname": lastname,
            "age": age,
            "height": height,
            "weight": weight,
            "phonenumber": phonenumber,
            "email": email
        };
        try{
            const record = await pb.collection('clients').create(data);
            router.push('../clientform')
            alert('Client Added')
        } catch (error){
            alert('Data invalid for one or more of fields');
        }
    }
    function clearSelect(){
        document.getElementById('clientfirstname').value = '';
        document.getElementById('clientlastname').value = '';
        document.getElementById('clientage').value = '';
        document.getElementById('clientheight').value = '';
        document.getElementById('clientweight').value = '';
        document.getElementById('clientphonenumber').value = '';
        document.getElementById('clientemail').value = '';
    }


  return (
    <div>
    <Topbar></Topbar>
    <button onClick={() => router.back()}>Back</button>
    <Clientdata></Clientdata>
      <div name='addclient'>
        <h1>ADD CLIENT</h1>
        <label htmlFor="clientfirstname">First Name:</label>
        <input type='text' name='firstname' placeholder='Enter First name' onChange={e => setfirstname(e.target.value)} id='clientfirstname'/>
        <label htmlFor="clientlastname">Last Name:</label>
        <input type='text' name='lastname' placeholder='Enter Last name' onChange={e => setlastname(e.target.value)} id='clientlastname' />
        <label htmlFor="clientlastname">Age:</label>
        <input type='number' name='age' placeholder='Enter Age' onChange={e => setage(e.target.value)} id='clientage' />
        <label htmlFor="clientlastname">Height:</label>
        <input type='number' name='height' placeholder='Enter Height' onChange={e => setheight(e.target.value)} id='clientheight' />
        <label htmlFor="clientlastname">Weight:</label>
        <input type='number' name='weight' placeholder='Enter Weight' onChange={e => setweight(e.target.value)} id='clientweight' />
        <label htmlFor="clientlastname">Phone Number:</label>
        <input type='text' name='phonenumber' placeholder='Enter Phone Number' onChange={e => setphonenumber(e.target.value)} id='clientphonenumber' />
        <label htmlFor="clientlastname">Email:</label>
        <input type='text' name='email' placeholder='Enter Email' onChange={e => setemail(e.target.value)} id='clientemail' />
        <br></br>
        <button onClick={addclient}>ADD</button>
        <button onClick={clearSelect}>CLEAR</button>
      </div>
    </div>
  )
}




