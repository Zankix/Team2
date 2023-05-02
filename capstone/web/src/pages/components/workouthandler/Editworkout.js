import Topbar from '../pagecomponents/Topbar';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

const EditWorkout = () => {
  const router = useRouter();
  const [workouts, setWorkouts] = useState([]);
  const [editableRowId, setEditableRowId] = useState(null);
  const [editWorkout, setEditWorkout] = useState({
    workoutname: '',
    workoutdescription: '',
    workoutfocus: '',
    clients:'',
    workoutdate: '',
  });

  const handleEditWorkout = async (workoutId, data) => {
    try {
      const result = await pb.collection('workouts').update(workoutId, data);
      const index = workouts.findIndex((workout) => workout.id === workoutId);
      const updatedWorkouts = [...workouts];
      updatedWorkouts[index] = result;
      setWorkouts(updatedWorkouts);
      console.log(`Workout with ID ${workoutId} updated successfully.`);
    } catch (err) {
      console.error(`Error updating workout with ID ${workoutId}: ${err}`);
    }
  };

  const handleSaveWorkout = (workoutId) => {
    const index = workouts.findIndex((workout) => workout.id === workoutId);
    const workoutToUpdate = workouts[index];

    handleEditWorkout(workoutId, {
      ...workoutToUpdate,
      workoutname: editWorkout.workoutname,
      workoutdescription: editWorkout.workoutdescription,
      workoutfocus: editWorkout.workoutfocus,
      workoutdate: editWorkout.workoutdate,
    });

    setEditableRowId(null);
  };

  const displayWorkouts = async () => {
    try {
      const result = await pb.collection('workouts').getFullList(200, { sort: '-created' });
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
      <Topbar />
      <button onClick={() => router.back()}>Back</button>
  
      <table className="table my-table">
        <thead>
          <tr>
            <th>Name</th>
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
                  <input
                    type="text"
                    id={`workoutname-${workout.id}`}
                    defaultValue={workout.workoutname}
                  />
                ) : (
                  workout.workoutname
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input
                    type="text"
                    id={`workoutdescription-${workout.id}`}
                    defaultValue={workout.workoutdescription}
                  />
                ) : (
                  workout.workoutdescription
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input
                    type="text"
                    id={`workoutfocus-${workout.id}`}
                    defaultValue={workout.workoutfocus}
                  />
                ) : (
                  workout.workoutfocus
                )}
              </td>
              {/* clients dropdown select*/}
              <td>
                {editableRowId === index ? (
                  <input
                    type="select"
                    id={`clients-${workout.clients.id}`}
                    defaultValue={workout.clients.email}
                  />
                ) : (
                  workout.clients.email
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input
                    type="date"
                    id={`workoutdate-${workout.id}`}
                    defaultValue={workout.workoutdate}
                  />
                ) : (
                  workout.workoutdate
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <button onClick={() => handleSaveWorkout(workout.id)}>Submit</button>
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