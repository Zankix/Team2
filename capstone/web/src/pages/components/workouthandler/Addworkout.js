import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

export default function Addworkout() {
  const router = useRouter();
  const [workouts, setWorkouts] = useState([]);
  const [workoutname, setworkoutname] = useState('');
  const [workoutdescription, setworkoutdescription] = useState('');
  const [workoutfocus, setworkoutfocus] = useState('');
  const [workoutdate, setworkoutdate] = useState('');

  const testConnection = async () => {
    try {
      // Try to retrieve data from PocketBase server
      const result = await pb.collection('workouts').getFullList(200, { sort: '-created'});
      console.log('Connection to PocketBase server successful.');
    } catch (err) {
      // Catch network errors
      if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
        console.error('Error connecting to PocketBase server: Network error');
      }
      // Catch server errors
      else if (err.response) {
        console.error('Error connecting to PocketBase server: Server error');
      }
      // Catch authentication errors
      else if (err.code === 'EBADAUTH') {
        console.error('Error connecting to PocketBase server: Authentication error');
      }
      // Catch other errors
      else {
        console.error('Error connecting to PocketBase server:', err.message);
      }
    }
  };
  
  const displayWorkouts = async () => {
    try {
      const result = await pb.collection('workouts').getFullList(200, { sort: '-created'},{timeout: 5000});
      setWorkouts(result);
      console.log('Workouts found: ', result);
    } catch (err) {
      console.error('Error fetching workouts: ', err);
    }
  };

  const addnewworkout = async(e) => {
    const data = {
      "workoutname": workoutname,
      "workoutdescription": workoutdescription,
      "workoutfocus": workoutfocus,
      "workoutdate": workoutdate,
  };
  try{
    const record = await pb.collection('workouts').create(data);
    router.push('../workoutform')
    alert('Workout Added')
  } catch (error){
      alert('Data invalid for one or more of fields');
  }
  }
 

  useEffect(() => {
    testConnection();
    displayWorkouts();
  }, []);

  return (
 
    <div>
      <Topbar></Topbar>
      <button onClick={() => router.back()}>Back</button>
      <h1>Workouts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Focus</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout._id}>
              <td>{workout.workoutname}</td>
              <td>{workout.workoutdescription}</td>
              <td>{workout.workoutfocus}</td>
              <td>{workout.workoutdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <div name='addworkout'>
          <h1>Add Workout</h1>
          <label>
            Workout Name:
            <input type='text' name='workoutname' placeholder='Enter workout name' onChange={e => setworkoutname(e.target.value)} id='workoutnameinput'/>
          </label>
          <br></br>
          <label>
            Workout Description:
            <input type='text' name='workoutdescription' placeholder='Enter workout description' onChange={e => setworkoutdescription(e.target.value)} id='workoutdescriptioninput'/>
          </label>
          <br></br>
          <label>
            Workout Focus:
            <input type='text' name='workoutfocus' placeholder='Enter workout focus' onChange={e => setworkoutfocus(e.target.value)} id='workoutfocusinput'/>
          </label>
          <br></br>
          <label>
            Select Date:
            <input type='date' name='workoutdate' placeholder='Enter workout date' onChange={e => setworkoutdate(e.target.value)} id='workoutdateinput'/>
          </label>
          <br></br>
          <button onClick={addnewworkout}>Add New Workout</button>
        </div>
    </div>
  )
}
