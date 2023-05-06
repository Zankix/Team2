import Topbar from '../pagecomponents/Topbar';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

const EditClient = () => {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [editableRowId, setEditableRowId] = useState(null);
  const [editClient, setEditClient] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    age: '',
    height: '',
    weight: '',
  
  });

  const handleEditClient = async (clientId, data) => {
    try {
      const updatedClient = await pb.collection('clients').update(clientId, data);
      const updatedClients = clients.map((client) => client.id === updatedClient.id ? updatedClient : client);
      setClients(updatedClients);
      console.log(`Client with ID ${clientId} updated successfully.`);
    } catch (err) {
      console.error(`Error updating client with ID ${clientId}: ${err}`);
    }
  };
  

  const handleSaveClient = async (clientId) => {
    const index = clients.findIndex((client) => client.id === clientId);
    const clientToUpdate = clients[index];
  
    try {
      await handleEditClient(clientId, {
        ...clientToUpdate,
        firstname: editClient.firstname || clientToUpdate.firstname,
        lastname: editClient.lastname || clientToUpdate.lastname,
        phonenumber: editClient.phonenumber || clientToUpdate.phonenumber,
        email: editClient.email || clientToUpdate.email,
        age: editClient.age || clientToUpdate.age,
        height: editClient.height || clientToUpdate.height,
        weight: editClient.weight || clientToUpdate.weight,
      });
  
      setEditableRowId(null);
      console.log(`Client with ID ${clientId} updated successfully.`);
    } catch (err) {
      console.error(`Error updating client with ID ${clientId}: ${err}`);
    }
  };
  

  const displayClients = async () => {
    try {
      const result = await pb.collection('clients').getFullList(200, { '$autoCancel': false });
      setClients(result);
      console.log('Clients found: ', result);
    } catch (err) {
      console.error('Error fetching workouts: ', err);
    }
  };

  useEffect(() => {
    const fetchClients = async () => {
      await displayClients();
    };
    fetchClients();
  }, []);

  return (
    <div>
      <Topbar />
      <h1 className='h1 titles'>Edit Clients</h1>

      <table className="table my-table">
        <thead>
          <tr>
             <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phonenumber</th>
              <th>Age</th>  
              <th>Height</th>
              <th>Weight</th>   
              <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={client.id}>
              <td>
                {editableRowId === index ? (
                  <input type="text" id={`firsttname-${client.id}`} defaultValue={client.firstname} onChange={(e) => setEditClient({...editClient, firstname: e.target.value})}/>
                ) : (
                  client.firstname
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input type="text" id={`lastname-${client.id}`} defaultValue={client.lastname} onChange={(e) => setEditClient({...editClient, lastname: e.target.value})}/>
                ) : (
                  client.lastname
                )}
              </td>
              
              <td>
                {editableRowId === index ? (
                  <input type="text" id={`email-${client.id}`} defaultValue={client.email} onChange={(e) => setEditClient({...editClient, email: e.target.value})}/>
                ) : (
                  client.email
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input type="text" id={`phonenumber-${client.id}`} defaultValue={client.phonenumber} onChange={(e) => setEditClient({...editClient, phonenumber: e.target.value})}/>
                ) : (
                  client.phonenumber
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input type="number" id={`age-${client.id}`} defaultValue={Number(client.age)} onChange={(e) => setEditClient({...editClient, age: Number(e.target.value)})}/>
                  ) : (
                  client.age
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input type="number" id={`height-${client.id}`} defaultValue={client.height} onChange={(e) => setEditClient({...editClient, height: e.target.value})}/>
                ) : (
                  client.height
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input type="number" id={`weight-${client.id}`} defaultValue={client.weight} onChange={(e) => setEditClient({...editClient, weight: e.target.value})}/>
                ) : (
                  client.weight
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <button onClick={() => handleSaveClient(client.id)}>Submit</button>
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
export default EditClient  