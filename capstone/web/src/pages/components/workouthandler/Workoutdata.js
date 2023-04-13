import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

export default function Table() {
  const [workouts, setWorkouts] = useState([]);

  const displayWorkouts = async () => {
    try {
      const result = await pb.collection('workouts').getFullList(200);
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
      <table className="table my-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Focus</th>
            <th>Clients</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.workoutname}</td>
              <td>{workout.workoutdescription}</td>
              <td>{workout.workoutfocus}</td>
              <td>
                {workout.clients.map((client, index) => (
                  <div key={index}>{client}</div>
                ))}
              </td>
              <td>{workout.workoutdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
