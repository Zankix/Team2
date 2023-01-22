import { nanoid } from '@reduxjs/toolkit';
import {  useState, Fragment } from 'react'
import ClientEditRow from '../component/ClientEditRow';
import ClientReadRow from '../component/ClientReadRow';
import data from './clientdata.json'
import './tableview.css'

const Client = () => {

  const [clients, setClients] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name:'',
    Address:'',
    Email:'',
    Phone:''
  });
  const [editFormData, setEditFormData] = useState({
    Name:'',
    Address:'',
    Email:'',
    Phone:''
  });

  const [editClientID, setEditClientID] = useState(null);
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
    const newClient = {
      id: nanoid(),
      Name: addFormData.Name,
      Address: addFormData.Address,
      Email: addFormData.Email,
      Phone: addFormData.Phone
    };
    const newClients = [...clients, newClient];
    setClients(newClients);
  };
  const handleEditFormSubmit = (event) =>{
    event.preventDefault();
    const editedClient ={
      id: editClientID,
      Name: editFormData.Name,
      Address: editFormData.Address,
      Email: editFormData.Email,
      Phone: editFormData.Phone
    }
    const newClients = [...clients];
    const index = clients.findIndex((client)=> client.id === editClientID);
    newClients[index] = editedClient;
    setClients(newClients);
    setEditClientID(null);
  };

  const handleEditClick = (event, clients)=>{
    event.preventDefault();
    setEditClientID(clients.id);
    const formValues={
      Name: clients.Name,
      Address: clients.Address,
      Email: clients.Email,
      Phone: clients.Phone
    }
    setEditFormData(formValues);
  };

  const handleCancelClick = () =>{
    setEditClientID(null);
  }

  const handleDeleteClick = (clientID) => {
    const newClients = [...clients];
    const index = clients.findIndex((client) => client.id === clientID);
    newClients.splice(index, 1);
    setClients(newClients);
  }

  return (
    <div className='client-table'>
      
      <h2>Add Client</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          type = 'text'
          name = 'Name'
          placeholder='Enter Name'
          required = 'required'
          onChange={handleAddFormChange}
        />
         <input 
          type = 'text'
          name = 'Address'
          placeholder='Enter Address'
          required = 'required'
          onChange={handleAddFormChange}
        />
         <input 
          type = 'text'
          name = 'Email'
          placeholder='Enter Email'
          required = 'required'
          onChange={handleAddFormChange}
        />
         <input 
          type = 'text'
          name = 'Phone'
          placeholder='Enter Phone Number'
          required = 'required'
          onChange={handleAddFormChange}
        />
        <button type='submit'>Add Client</button>
      </form>
      <h1>Client Manager</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
            </tr>
          </thead>
            <tbody>
            {clients.map((clients) => (
            <Fragment>
              {editClientID === clients.id ? (
              <ClientEditRow editFormData={editFormData} 
              handleEditFormChange={handleEditFormChange}
              handleCancelClick={handleCancelClick}
              />

              ) : (
              <ClientReadRow 
              clients={clients}
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

export default Client;
