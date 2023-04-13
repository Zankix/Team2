import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Workoutdata from './Workoutdata'
import Topbar from '../pagecomponents/Topbar';

const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 10000 });

export default function Addworkout() {
  const router = useRouter();
  const [workoutname, setworkoutname] = useState('');
  const [workoutdescription, setworkoutdescription] = useState('');
  const [workoutfocus, setworkoutfocus] = useState('');
  const [clients, setclients] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [workoutdate, setworkoutdate] = useState('');

  useEffect(() => {
    async function fetchClients() {
      const records = await pb.collection('clients').getFullList(200, { '$autoCancel': false });
      setclients(records);
    }
    fetchClients();
  }, []);

  const addnewworkout = async(e) => {
    const data = {
      "workoutname": workoutname,
      "workoutdescription": workoutdescription,
      "workoutfocus": workoutfocus,
      "client": selectedClient,
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

  return (
    <div>
      <Topbar></Topbar>
      <h1 class="h1 titles">Add Workouts</h1>
      <Workoutdata></Workoutdata>
      <div name='addclient'>
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
          Clients:
          <select name='clients' onChange={e => setSelectedClient(e.target.value)}>
            <option value=''>-- Select a client --</option>
            {/* Loop through the clients from the PocketBase collection and create an option for each */}
            {clients.map(client => (
              <option value={client.id} key={client.id}>{client.email}</option>
            ))}
          </select>

        </label>
        <br></br>
        <label>
          Select Date:
          <input type='date' name='workoutdate' placeholder='Enter workout date' onChange={e => setworkoutdate(e.target.value)} id='workoutdateinput'/>
        </label>
        <br></br>
        <button class="button button-mainpages" onClick={addnewworkout}>Add New Workout</button>
      </div>
      <button class="button button-back" onClick={() => router.back()}>Back</button>
    </div>
  )
}  