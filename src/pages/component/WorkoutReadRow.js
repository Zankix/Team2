import React from 'react'

const WorkoutReadRow = ({workouts, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
    <td>{workouts.WorkoutName}</td>
    <td>{workouts.DateTime}</td>
    <td>{workouts.Capacity}</td>
    <td>{workouts.Instructor}</td>
    <td>
        <button type = 'button' onClick={(event) =>
            handleEditClick(event, workouts)}
        >
        Edit</button>
        <button type = 'button' onClick={() => handleDeleteClick(workouts.id)}>Delete</button>
    </td>
  </tr>
  )
}

export default WorkoutReadRow
