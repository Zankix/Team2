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
  const [selectedClients, setSelectedClients] = useState([null]);
  const [workoutdate, setworkoutdate] = useState('');

  useEffect(() => {
    async function fetchClients() {
      const records = await pb.collection('clients').getFullList(200, { '$autoCancel': false });
      setclients(records);
    }
    fetchClients();
  }, []);

  const handleClientChange = (index, value) => {
    const newSelectedClients = [...selectedClients];
    newSelectedClients[index] = value;
    setSelectedClients(newSelectedClients);
  }

  const addNewClientDropdown = () => {
    setSelectedClients(prevSelectedClients => [...prevSelectedClients, null]);
  }

  const removeClientDropdown = (index) => {
    setSelectedClients(prevSelectedClients => prevSelectedClients.filter((_, i) => i !== index));
  }

  const addNewWorkout = async(e) => {
    const data = {
      "workoutname": workoutname,
      "workoutdescription": workoutdescription,
      "workoutfocus": workoutfocus,
      "clients": selectedClients.filter(client => client !== null), // filter out null values
      "workoutdate": workoutdate,
    };
    try {
      const record = await pb.collection('workouts').create(data);
      router.push('../workoutform');
    } catch (error) {
      alert('Data invalid for one or more fields');
    }
  }

  return (
    <div>
      <Topbar />
      <h1 className="h1 titles">Add Workouts</h1>
      <Workoutdata />
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
        <div>
          <label>Clients:</label>
          {selectedClients.map((selectedClient, index) => (
            <div key={selectedClient?.id || index}>
              <select value={selectedClient || ''} onChange={e => handleClientChange(index, e.target.value)}>
                <option value="">-- Select a Client --</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>{client.email}</option>
                ))}
              </select>
              {selectedClients.length > 1 && (
                <button onClick={() => removeClientDropdown(index)}> - </button>
              )}
              {index === selectedClients.length - 1 && (
                <button onClick={addNewClientDropdown}> + </button>
              )}
            </div>
          ))}
        </div>
        <br></br>
        <label>
          Workout Date:
          <input type='date' name='workoutdate' onChange={e => setworkoutdate(e.target.value)} id='workoutdateinput'/>
        </label>
        <br></br>
        <button onClick={addNewWorkout}>Add Workout</button>
      </div>
    </div>
  );
}