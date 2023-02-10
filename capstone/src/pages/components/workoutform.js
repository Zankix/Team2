import React from 'react'

function workoutform() {
  return (
    <form onSubmit="workouthandler">
        <label>Enter Workout Name: <input type="text" /> </label>
        <label>Enter Description: <input type="text" /> </label>
        
    </form>
  )
}

export default workoutform
