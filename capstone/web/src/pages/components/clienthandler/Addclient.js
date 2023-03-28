import React, { useState } from 'react'
import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';

const pb = new PocketBase('http://127.0.0.1:8090');


export default function Addclient() {
    const router = useRouter();
    const [ firstname , setfirstname ] = useState('');
    const [ lastname , setlastname ] = useState('');
    const [ dob , setdob ] = useState('');
    const [ sex , setsex ] = useState('');
    const [ height , setheight ] = useState('');
    const [ weight , setweight ] = useState('');
    const [ phonenumber, setphonenumber ] = useState('');
    const [ email , setemail ] = useState('');
    // "2022-01-01 00:00:00.123Z"
    async function addclient(){
        const data = {
            "firstname": firstname,
            "lastname": lastname,
            "dob": dob,
            "sex": sex,
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
        document.getElementById('clientdob').value = '';
        document.getElementById('clientsex').value = '';
        document.getElementById('clientheight').value = '';
        document.getElementById('clientweight').value = '';
        document.getElementById('clientphonenumber').value = '';
        document.getElementById('clientemail').value = '';
    }

  return (
    <div>
    <Topbar></Topbar>
    <button class="button button-mainpages" onClick={() => router.back()}>Back</button>
    <h1 class="h1 titles">Add Clients</h1>
      <div name='addclient'>
        <h1>ADD CLIENT</h1>
        <input type='text' name='firstname' placeholder='Enter First name' onChange={e => setfirstname(e.target.value)} id='clientfirstname'/>
        <input type='text' name='lastname' placeholder='Enter Last name' onChange={e => setlastname(e.target.value)} id='clientlastname' />
        <input type='date' name='dob' placeholder='Enter DOB YYYY-DD-MM' onChange={e => setdob(e.target.value)} id='clientdob' />
        <input type='select' name='sex' placeholder='Enter Sex' onChange={e => setsex(e.target.value)} id='clientsex' />
        <input type='number' name='height' placeholder='Enter Height' onChange={e => setheight(e.target.value)} id='clientheight' />
        <input type='number' name='weight' placeholder='Enter Weight' onChange={e => setweight(e.target.value)} id='clientweight' />
        <input type='text' name='phonenumber' placeholder='Enter Phone Number' onChange={e => setphonenumber(e.target.value)} id='clientphonenumber' />
        <input type='text' name='email' placeholder='Enter Email' onChange={e => setemail(e.target.value)} id='clientemail' />
        <br></br>
        <button class="button button-mainpages" onClick={addclient}>ADD</button>
        <button class="button button-mainpages" onClick={clearSelect}>CLEAR</button>
      </div>
    </div>
  )
}


