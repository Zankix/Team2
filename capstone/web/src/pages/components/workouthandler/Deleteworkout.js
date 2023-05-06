import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Workoutdata from './Workoutdata'
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

const DeleteWorkout = () => {
    const router = useRouter();
    const [workouts, setWorkouts] = useState([])
    const [clients, setClients] = useState([]);
    
  
    const handleDeleteWorkout = async (workoutId) => {
      try {
        await pb.collection('workouts').delete(workoutId)
        const updatedWorkouts = workouts.filter((workout) => workout.id !== workoutId)
        setWorkouts(updatedWorkouts)
        console.log(`Workout with ID ${workoutId} deleted successfully.`)
      } catch (err) {
        console.error(`Error deleting workout with ID ${workoutId}: ${err}`)
      }
    }
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
    const getClientEmails = (clientIds) => {
      return clientIds.map((id) => {
        const client = clients.find((c) => c.id === id);
        return { id: id, email: client ? client.email : '' };
      });
    };

  return (
    <div>
      <Topbar></Topbar>
      <h1 className="h1 titles">Delete Workouts</h1>
      <table className="table my-table">
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
          {workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.workoutname}</td>
              <td>{workout.workoutdescription}</td>
              <td>{workout.workoutfocus}</td>
              <td>{getClientEmails(workout.clients).map(({ id, email }) => (<div key={id}>{email}</div> ))}</td>
              <td>{workout.workoutdate}</td>
              <td>
                <button onClick={() => handleDeleteWorkout(workout.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DeleteWorkout
