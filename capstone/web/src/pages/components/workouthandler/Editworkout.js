import Topbar from '../pagecomponents/Topbar';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

const EditWorkout = () => {
  const router = useRouter();
  const [workouts, setWorkouts] = useState([]);
  const [clients, setClients] = useState([]);
  const [selectedClients, setSelectedClients] = useState([null]);
  const [editableRowId, setEditableRowId] = useState(null);
  const [editWorkout, setEditWorkout] = useState({
    workoutname: '',
    workoutdescription: '',
    workoutfocus: '',
    clients: [''],
    workoutdate: '',
  });

  const handleClientChange = (clientIndex, value) => {
    const newSelectedClients = [...selectedClients];
    newSelectedClients[clientIndex] = value;
    setSelectedClients(newSelectedClients);
  }
  const addNewClientDropdown = () => {
    setSelectedClients(prevSelectedClients => [...prevSelectedClients, null]);
  }
  const removeClientDropdown = (index) => {
    setSelectedClients(prevSelectedClients => prevSelectedClients.filter((_, i) => i !== index));
  }
  const handleEditWorkout = async (workoutId, data) => {
    try {
      const updatedWorkout = await pb.collection('workouts').update(workoutId, data);
      const updatedWorkouts = workouts.map((workout) => workout.id === updatedWorkout.id ? updatedWorkout : workout);
      setWorkouts(updatedWorkouts);
      console.log(`Workout with ID ${workoutId} updated successfully.`);
    } catch (err) {
      console.error(`Error updating workout with ID ${workoutId}: ${err}`);
    }
  };
  
  const handleSaveWorkout = async (workoutId) => {
    const index = workouts.findIndex((workout) => workout.id === workoutId);
    const workoutToUpdate = workouts[index];
    try{
      await handleEditWorkout(workoutId, {
        ...workoutToUpdate,
        workoutname: editWorkout.workoutname || workoutToUpdate.workoutname,
        workoutdescription: editWorkout.workoutdescription || workoutToUpdate.workoutdescription,
        workoutfocus: editWorkout.workoutfocus || workoutToUpdate.workoutfocus,
        clients: selectedClients.filter(client => client !== null),
        workoutdate: editWorkout.workoutdate || workoutToUpdate.workoutdate,
      });
  
      setEditableRowId(null);
      setSelectedClients([null]);
      console.log(`Workout with ID ${workoutId} updated successfully.`);
    } catch(err){
      console.error(`Error updating client with ID ${workoutId}: ${err}`);
    }
  };

  const displayWorkouts = async () => {
    try {
      const result = await pb.collection('workouts').getFullList(200, { '$autoCancel': false });
      setWorkouts(result);
      console.log('Workouts found: ', result);
    } catch (err) {
      console.error('Error fetching workouts: ', err);
    }
  };

  const displayClients = async () => {
    try {
      const result = await pb.collection('clients').getFullList(200, { '$autoCancel': false });
      setClients(result);
      console.log('Clients found: ', result);
    } catch (err) {
      console.error('Error fetching clients: ', err);
    }
  };
  const removeClientEmail = (clientId) => {
    const updatedSelectedClients = selectedClients.filter((id) => id !== clientId);
    setSelectedClients(updatedSelectedClients);
  };
  
  useEffect(() => {
    const fetchWorkouts = async () => {
      await displayWorkouts();
    };
    const fetchClients = async () => {
      await displayClients();
    };
    fetchWorkouts();
    fetchClients();
  }, []);

  return (
    <div>
     
      <Topbar />
      <h1 className='h1 titles'>Edit Workouts</h1>
      <table className='table my-table'>
        <thead>
          <tr>
          <th>Workout Name</th>
            <th>Description</th>
            <th>Focus</th>
            <th>Clients</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={workout.id}>
              <td>
                {editableRowId === index ? (
                  <input type='text' id={`workoutname-${workout.id}`} defaultValue={workout.workoutname} onChange={(e) => setEditWorkout({...editWorkout, workoutname: e.target.value})}/>
                ) : (
                  workout.workoutname
                )}
                </td> 
                <td>
                {editableRowId === index ? (
                  <input type='text' id={`workoutdescription-${workout.id}`} defaultValue={workout.workoutdescription} onChange={(e) => setEditWorkout({...editWorkout, workoutdescription: e.target.value})}/>
                ) : (
                  workout.workoutdescription
                )}
                </td> 
                <td>
                {editableRowId === index ? (
                  <input type='text' id={`workoutfocus-${workout.id}`} defaultValue={workout.workoutfocus} onChange={(e) => setEditWorkout({...editWorkout, workoutfocus: e.target.value})}/>
                ) : (
                  workout.workoutfocus
                )}
                </td> 
                <td>
                  {editableRowId === index ? (
                    <div>
                      {workout.clients.map((selectedClient, clientIndex) => {
                        //const client = clients.find((client) => client.id === selectedClient);
                        return (
                          <div key={selectedClient?.id || clientIndex}>
                            <select value={selectedClient || ''}  onChange={e => handleClientChange(clientIndex, e.target.value)}>
                              <option value="">Select a client</option>
                              {clients.map((client) => (
                                <option key={client.id} value={client.id}>{client.email}</option>
                              ))}
                            </select>
                            {selectedClients.length > 0 && (
                                <button onClick={() => removeClientDropdown(clientIndex)}> - </button>
                              )}
                              {clientIndex === selectedClients.length - 1 && (
                                <button onClick={() => addNewClientDropdown(clientIndex)}> + </button>
                              )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    workout.clients.map((clientId) => {
                      const client = clients.find((client) => client.id === clientId);
                      return client ? <div key={client.id}>{client.email}</div> : null;
                    })
                  )}
                </td>
                <td>
                {editableRowId === index ? (
                  <input type='date' id={`workoutdate-${workout.id}`} defaultValue={workout.workoutdate} onChange={(e) => setEditWorkout({...editWorkout, workoutdate: e.target.value})}/>
                ) : (
                  workout.workoutdate
                )}
                </td> 
                <td>
                {editableRowId === index ? (
                  <div>
                    <button className='btn btn-sm btn-danger my-2' onClick={() => setEditableRowId(null)}>Cancel</button>
                     <button onClick={() => handleSaveWorkout(workout.id)}>Submit</button>
                  </div>
                 
                ) : (
                  <button onClick={() => setEditableRowId(index)}>Edit</button>
                )}
              </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
export default EditWorkout