import { nanoid } from '@reduxjs/toolkit';
import {  useState, Fragment } from 'react'
import WorkoutEditRow from '../component/WorkoutEditRow';
import WorkoutReadRow from '../component/WorkoutReadRow';
import data from './workoutdata.json'
import './tableview.css'

const Workout = () => {

    const [workouts, setWorkouts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      WorkoutName:'',
      DateTime:'',
      Capacity:'',
      Instructor:''
    });
    const [editFormData, setEditFormData] = useState({
      WorkoutName:'',
      DateTime:'',
      Capacity:'',
      Instructor:''
    });
  
    const [editWorkoutID, setEditWorkoutID] = useState(null);
    const handleAddFormChange = (event) => {
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
      const newFormData = { ...addFormData};
      newFormData[fieldName] = fieldValue;
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event)=> {
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
      const newFormData={ ...editFormData};
      newFormData[fieldName] = fieldValue;
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
      const newWorkout = {
        id: nanoid(),
        WorkoutName: addFormData.WorkoutName,
        DateTime: addFormData.DateTime,
        Capacity: addFormData.Capacity,
        Instructor: addFormData.Instructor
      };
      const newWorkouts = [...workouts, newWorkout];
      setWorkouts(newWorkouts);
    };
    const handleEditFormSubmit = (event) =>{
      event.preventDefault();
      const editedWorkout ={
        id: editWorkoutID,
        WorkoutName: editFormData.WorkoutName,
        DateTime: editFormData.DateTime,
        Capacity: editFormData.Capacity,
        Instructor: editFormData.Instructor
      }
      const newWorkouts = [...workouts];
      const index = workouts.findIndex((workout)=> workout.id === editWorkoutID);
      newWorkouts[index] = editedWorkout;
      setWorkouts(newWorkouts);
      setEditWorkoutID(null);
    };
  
    const handleEditClick = (event, workouts)=>{
      event.preventDefault();
      setEditWorkoutID(workouts.id);
      const formValues={
        WorkoutName: workouts.WorkoutName,
        DateTime: workouts.DateTime,
        Capacity: workouts.Capacity,
        Instructor: workouts.Instructor
      }
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () =>{
      setEditWorkoutID(null);
    }
  
    const handleDeleteClick = (workoutID) => {
      const newWorkouts = [...workouts];
      const index = workouts.findIndex((workout) => workout.id === workoutID);
      newWorkouts.splice(index, 1);
      setWorkouts(newWorkouts);
    }
  
    return (
      <div className='workout-table'>
        
        <h2>Add Workout</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input 
            type = 'text'
            name = 'WorkoutName'
            placeholder='Enter WorkoutName'
            required = 'required'
            onChange={handleAddFormChange}
          />
           <input 
            type = 'text'
            name = 'DateTime'
            placeholder='Enter DateTime'
            required = 'required'
            onChange={handleAddFormChange}
          />
           <input 
            type = 'text'
            name = 'Capacity'
            placeholder='Enter Capacity'
            required = 'required'
            onChange={handleAddFormChange}
          />
           <input 
            type = 'text'
            name = 'Instructor'
            placeholder='Enter Instructor'
            required = 'required'
            onChange={handleAddFormChange}
          />
          <button type='submit'>Add Workout</button>
        </form>
        <h1>Workout Manager</h1>
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
              <th>WorkoutName</th>
              <th>DateTime</th>
              <th>Capacity</th>
              <th>Instructor</th>
              <th>Actions</th>
              </tr>
            </thead>
              <tbody>
              {workouts.map((workouts) => (
              <Fragment>
                {editWorkoutID === workouts.id ? (
                <WorkoutEditRow editFormData={editFormData} 
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
                />
  
                ) : (
                <WorkoutReadRow 
                workouts={workouts}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                />)}
                
          
              </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    );
  };
  
  export default Workout;
  
