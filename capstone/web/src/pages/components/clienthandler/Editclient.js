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
      const result = await pb.collection('clients').update(clientId, data);
      const index = clients.findIndex((client) => client.id === clientId);
      const updatedClients = [...clients];
      updatedClients[index] = result;
      setClients(updatedClients);
      console.log(`Client with ID ${clientId} updated successfully.`);
    } catch (err) {
      console.error(`Error updating client with ID ${clientId}: ${err}`);
    }
  };

  const handleSaveClient = (clientId) => {
    const index = clients.findIndex((client) => client.id === clientId);
    const clientToUpdate = clients[index];

    handleEditClient(clientId, {
      ...clientToUpdate,
      firstname: '',
      lastname: '',
      age: '',
      height: '',
      weight: '',
      phonenumber: '',
      email: ''
    });

    setEditableRowId(null);
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
      <button onClick={() => router.back()}>Back</button>
      <h1 className="h1 titles">Edit Clients</h1>
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
                  <input type="text" id={`firsttname-${client.id}`} defaultValue={client.firstname}/>
                ) : (
                  client.firstname
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input type="text" id={`lastname-${client.id}`} defaultValue={client.lastname}/>
                ) : (
                  client.lastname
                )}
              </td>
              
              <td>
                {editableRowId === index ? (
                  <input type="text" id={`email-${client.id}`} defaultValue={client.email}/>
                ) : (
                  client.email
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input type="text" id={`phonenumber-${client.id}`} defaultValue={client.phonenumber}/>
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
                  <input type="number" id={`height-${client.id}`} defaultValue={client.height}/>
                ) : (
                  client.height
                )}
              </td>
              <td>
                {editableRowId === index ? (
                  <input type="number" id={`weight-${client.id}`} defaultValue={client.weight}/>
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