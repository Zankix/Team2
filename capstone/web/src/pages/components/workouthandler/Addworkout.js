
import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const pb = new PocketBase('http://127.0.0.1:8090');

export default function Addworkout() {
  const router = useRouter();
  const [workouts, setWorkouts] = useState([]);
  const [ workoutname, setworkoutname ] = useState('');
  const [ workoutdescription, setworkoutdescription ] = useState('');
  const [ workoutfocus, setworkoutfocus ] = useState('');
  const [ workoutdate, setworkoutdate ] = useState('');

  const addnewworkout = async(e) => {
    const data = {
      "workoutname": workoutname,
      "workoutdescription": workoutdescription,
      "workoutfocus": workoutfocus,
      "workoutdate": workoutdate,
      // "exercises": [
      //     "RELATION_RECORD_ID"
      // ]
  };
  try{
    const record = await pb.collection('workouts').create(data);
    router.push('../workoutform')
    alert('Workout Added')
  } catch (error){
      alert('Data invalid for one or more of fields');
  }
  }
  const displayWorkouts = async () => {
    try {
      const result = await pb.collection('workouts').findAll();
      setWorkouts(result);
      console.log('Workouts found: ', result);
    } catch (err) {
      console.error('Error fetching workouts: ', err);
    }
  };

  useEffect(() => {
    displayWorkouts();
  }, []);

  return (
    <div>
      <Topbar></Topbar>
        <div name='addclient'>
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
          <br></br>
          <button onClick={addnewworkout}>Add New Workout</button>
        </div>
        
      
    </div>
  )
}

