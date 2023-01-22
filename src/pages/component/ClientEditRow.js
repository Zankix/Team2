import React from 'react'

const ClientEditRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        <td>
            <input
            type='text'
            name = 'Name'
            placeholder='Enter Name'
            required='required'
            value={editFormData.Name}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
        <input
            type='text'
            name = 'Address'
            placeholder='Enter Address'
            required='required'
            value={editFormData.Address}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
        <input
            type='text'
            name = 'Email'
            placeholder='Enter Email'
            required='required'
            value={editFormData.Email}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
        <input
            type='text'
            name = 'Phone'
            placeholder='Enter Phone'
            required='required'
            value={editFormData.Phone}
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

export default ClientEditRow
