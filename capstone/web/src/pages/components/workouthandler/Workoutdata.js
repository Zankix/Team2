import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

export default function Table() {

  const [workouts, setWorkouts] = useState([]);

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
      const result = await pb.collection('workouts').getFullList(200, { sort: '-created'});
      setWorkouts(result);
      console.log('Workouts found: ', result);
    } catch (err) {
      console.error('Error fetching workouts: ', err);
    }
  };

  useEffect(() => {
    testConnection();
    displayWorkouts();
  }, []);

    return (
      <div>
        <table class="table my-table">
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
              <tr key={workout.id}>
                <td>{workout.workoutname}</td>
                <td>{workout.workoutdescription}</td>
                <td>{workout.workoutfocus}</td>
                <td>{workout.workoutdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

