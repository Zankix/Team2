
import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const pb = new PocketBase('http://127.0.0.1:8090');

export default function Addworkout() {
  const router = useRouter();
  const [ workoutname, setworkoutname ] = useState('');
  const [ workoutdescription, setworkoutdescription ] = useState('');
  const [ workoutfocus, setworkoutfocus ] = useState('');
  const [ workoutdate, setworkoutdate ] = useState('');

  const addnewworkout = async(e) => {
    const data = {
      "workoutname": "test",
      "workoutdescription": "test",
      "workoutfocus": "test",
      "workoutdate": "2022-01-01 10:00:00.123Z",
      // "exercises": [
      //     "RELATION_RECORD_ID"
      // ]
  };
  const record = await pb.collection('workouts').create(data);
  }
  return (
    <div>
      <Topbar></Topbar>
        <div name='addworkout'>
          <h1>Add Workout</h1>
          <label>
            Workout Name:
            <input type='text' name='workoutname' placeholder='Enter workout name' onChange={e => setworkoutname(e.target.value)} id='workoutnameinput'/>
          </label>
          <br></br>
          <label>
            Workout Description:
            <input type='text' name='workoutdescription' placeholder='Enter workout name' onChange={e => setworkoutdescription(e.target.value)} id='workoutdescriptioninput'/>
          </label>
          <br></br>
          <label>
            Workout Focus:
            <input type='text' name='workoutfocus' placeholder='Enter workout name' onChange={e => setworkoutfocus(e.target.value)} id='workoutfocusinput'/>
          </label>
          <br></br>
          <label>
            Select Date:
            <input type='date' name='workoutdate' placeholder='Enter workout name' onChange={e => setworkoutdate(e.target.value)} id='workoutdateinput'/>
          </label>
          <button onClick={addnewworkout} ></button>
        </div>
        
      
    </div>
  )
}

