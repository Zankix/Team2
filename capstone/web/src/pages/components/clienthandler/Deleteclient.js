import Topbar from '../pagecomponents/Topbar'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });
const Deleteclient = () => {
    const router = useRouter();
    const [clients, setClients] = useState([]);
    const handleDeleteClient = async (clientId) => {
      try {
        await pb.collection('clients').delete(clientId);
        const updatedClients = clients.filter((client) => client.id !== clientId);
        setClients(updatedClients);
        console.log(`Client with ID ${clientId} deleted successfully.`);
      } catch (err) {
        console.error(`Error deleting client with ID ${clientId}: ${err}`);
      }
    };
  
    const displayClients = async () => {
      try {
        const result = await pb.collection('clients').getFullList(200, { sort: '-created' });
        setClients(result);
        console.log('Clients found: ', result);
      } catch (err) {
        console.error('Error fetching records: ', err);
      }
    };
  
    useEffect(() => {
      displayClients();
    }, []);

  return (
    <div>
      <Topbar></Topbar>
      <button onClick={() => router.back()}>Back</button>
      <h1>Clients</h1>
      <table class='table my-table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.firstname}</td>
              <td>{client.lastname}</td>
              <td>{client.email}</td>
              <td>{client.phonenumber}</td>
              <td>{client.height}</td>
              <td>{client.weight}</td>
              <td>
                <button onClick={() => handleDeleteClient(client.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Deleteclient
