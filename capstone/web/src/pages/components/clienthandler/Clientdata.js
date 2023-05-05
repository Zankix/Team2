import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });
export default function Clientdata() {
    const [clients, setClients] = useState([]);
  
    
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
      <table className = "table my-table">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phonenumber</th>
                <th>Age</th>
                <th>Height</th>
                <th>Weight</th>
            </tr>
        </thead>
        <tbody>
            {clients.map(client => (
                <tr key={client.id}>
                    <td>{client.firstname}</td>
                    <td>{client.lastname}</td>
                    <td>{client.email}</td>
                    <td>{client.phonenumber}</td>
                    <td>{client.age}</td>
                    <td>{client.height}</td>
                    <td>{client.weight}</td>
                </tr>
            ))}
        </tbody>

      </table>
    </div>
  );
}


