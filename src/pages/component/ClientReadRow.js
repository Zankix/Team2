import React from 'react'

const ClientReadRow = ({clients, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
    <td>{clients.Name}</td>
    <td>{clients.Address}</td>
    <td>{clients.Email}</td>
    <td>{clients.Phone}</td>
    <td>
        <button type = 'button' onClick={(event) =>
            handleEditClick(event, clients)}
        >
        Edit</button>
        <button type = 'button' onClick={() => handleDeleteClick(clients.id)}>Delete</button>
    </td>
  </tr>
  )
}

export default ClientReadRow;
