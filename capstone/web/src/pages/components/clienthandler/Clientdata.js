import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });
export default function Clientdata() {
    const [clients, setClients] = useState([]);
    const testConnection = async () => {
        try {
          // Try to retrieve data from PocketBase server
          const result = await pb.collection('workouts').getFullList(200, { sort: '-created'});
          console.log('Connection to PocketBase server successful.');
        } catch (err) {
          // Catch network errors
          if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
            console.error('Error connecting to PocketBase server: Network error');
          }
          // Catch server errors
          else if (err.response) {
            console.error('Error connecting to PocketBase server: Server error');
          }
          // Catch authentication errors
          else if (err.code === 'EBADAUTH') {
            console.error('Error connecting to PocketBase server: Authentication error');
          }
          // Catch other errors
          else {
            console.error('Error connecting to PocketBase server:', err.message);
          }
        }
      };
    
    const displayClients = async () => {
        try{
            const result = await pb.collection('clients').getFullList(200, { '$autoCancel': false })
            setClients(result);
            console.log('Clients found: ', result);
        } catch (err) {
            console.error('Error fetching records: ', err);
        }
    };

    useEffect(() => {
        testConnection();
        displayClients();
    }, []);
  return (
    <div>
      <table class = "table my-table">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phonenumber</th>
                <th>Height</th>
                <th>Weight</th>
            </tr>
        </thead>
        <tbody>
            {clients.map(client => (
                <tr key={client.id}>
                    <td>{client.firstname}</td>
                    <td>{client.lastname}</td>
                    <td>{client.age}</td>
                    <td>{client.email}</td>
                    <td>{client.phonenumber}</td>
                    <td>{client.height}</td>
                    <td>{client.weight}</td>
                </tr>
            ))}
        </tbody>

      </table>
    </div>
  );
}


