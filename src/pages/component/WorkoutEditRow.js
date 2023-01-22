import React from 'react'

const WorkkoutEditRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
      <tr>
          <td>
              <input
              type='text'
              name = 'WorkoutName'
              placeholder='Enter WorkoutName'
              required='required'
              value={editFormData.WorkoutName}
              onChange={handleEditFormChange}
              ></input>
          </td>
          <td>
          <input
              type='text'
              name = 'DateTime'
              placeholder='Enter DateTime'
              required='required'
              value={editFormData.DateTime}
              onChange={handleEditFormChange}
              ></input>
          </td>
          <td>
          <input
              type='text'
              name = 'Capacity'
              placeholder='Enter Capacity'
              required='required'
              value={editFormData.Capacity}
              onChange={handleEditFormChange}
              ></input>
          </td>
          <td>
          <input
              type='text'
              name = 'Instructor'
              placeholder='Enter Instructor'
              required='required'
              value={editFormData.Instructor}
              onChange={handleEditFormChange}
              ></input>
          </td>
          <td>
              <button type='Submit'>Save</button>
              <button type='Cancel' onClick={handleCancelClick}>Cancel</button>
          </td>
      </tr>
    )
  }
  
  export default WorkkoutEditRow
  