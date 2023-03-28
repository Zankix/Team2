import Topbar from '../pagecomponents/Topbar'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

const DeleteWorkout = () => {
    const router = useRouter();
    const [workouts, setWorkouts] = useState([]);
    const displayWorkouts = async () => {
      try {
        const result = await pb.collection('workouts').getFullList(200, { sort: '-created' });
        setWorkouts(result);
        console.log('Workouts found: ', result);
      } catch (err) {
        console.error('Error fetching workouts: ', err);
      }
    };

    const deleteWorkout = async (id) => {
      try {
        const result = await pb.collection('workouts').delete(id);
        console.log(`Workout with id ${id} deleted successfully`);
        const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
        setWorkouts(updatedWorkouts);
      } catch (err) {
        console.error(`Error deleting workout with id ${id}: `, err);
      }
    };
  
    useEffect(() => {
      displayWorkouts();
    }, []);

  return (
    <div>
      <Topbar></Topbar>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => router.back()}>Back</button>
      <h1>Workouts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Focus</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.id}>
              <td>{workout.workoutname}</td>
              <td>{workout.workoutdescription}</td>
              <td>{workout.workoutfocus}</td>
              <td>{workout.workoutdate}</td>
              <td>
                <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default DeleteWorkout
