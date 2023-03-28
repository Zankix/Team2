import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

const EditWorkout = () => {
    const router = useRouter();
    const [workouts, setWorkouts] = useState([]);

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
              <tr key={workout.id}>
                <td>
                  <input
                    type="text"
                    value={workout.workoutname}
                    onChange={e => {
                      const updatedWorkout = { ...workout, workoutname: e.target.value };
                      setWorkouts(workouts.map(c => (c.id === workout.id ? updatedWorkout : c)));
                    }}
                    onBlur={async () => {
                      try {
                        await pb.collection('workouts').update(workout.id, { workoutname: workout.workoutname });
                      } catch (err) {
                        console.error('Error updating record:', err);
                      }
                    }}
                  />
                </td>

                <td>
                <input
                    type="text"
                    value={workout.workoutdescription}
                    onChange={e => {
                      const updatedWorkout = { ...workout, workoutdescription: e.target.value };
                      setWorkouts(workouts.map(c => (c.id === workout.id ? updatedWorkout : c)));
                    }}
                    onBlur={async () => {
                      try {
                        await pb.collection('workouts').update(workout.id, { workoutdescription: workout.workoutdescription });
                      } catch (err) {
                        console.error('Error updating record:', err);
                      }
                    }}
                  />
                </td>
                <td>
                <input
                    type="text"
                    value={workout.workoutfocus}
                    onChange={e => {
                      const updatedWorkout = { ...workout, workoutfocus: e.target.value };
                      setWorkouts(workouts.map(c => (c.id === workout.id ? updatedWorkout : c)));
                    }}
                    onBlur={async () => {
                      try {
                        await pb.collection('workouts').update(workout.id, { workoutfocus: workout.workoutfocus });
                      } catch (err) {
                        console.error('Error updating record:', err);
                      }
                    }}
                  />
                </td>
                <td>
                <input
                  type="date"
                  value={new Date(workout.workoutdate).toISOString().substr(0, 10)}
                  onChange={(e) => {
                    const updatedWorkout = { ...workout, workoutdate: e.target.value };
                    setWorkouts(
                      workouts.map((c) => (c.id === workout.id ? updatedWorkout : c))
                    );
                  }}
                  onBlur={async () => {
                    try {
                      const formattedDate = new Date(workout.workoutdate).toISOString();
                      await pb.collection('workouts').update(workout.id, { workoutdate: formattedDate });
                    } catch (err) {
                      console.error('Error updating record:', err);
                    }
                  }}
                />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default EditWorkout
