import React, { useEffect, useState } from 'react'
import Topbar from '../pagecomponents/Topbar'
import { useRouter } from 'next/router';
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });
const Editclient = () => {
  const [clients, setClients] = useState([]);
    const router = useRouter();
    const displayClients = async () => {
      try{
          const result = await pb.collection('clients').getFullList(200, {sort: '-created'})
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
      <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phonenumber</th>
                <th>Height</th>
                <th>Weight</th>
            </tr>
        </thead>
        <tbody>
            {clients.map(client => (
                <tr key={client.id}>
                    <td>
                      <input
                        type="text"
                        value={client.firstname}
                        onChange={e => {
                          const updatedClient = { ...client, firstname: e.target.value };
                          setClients(clients.map(c => (c.id === client.id ? updatedClient : c)));
                        }}
                        onBlur={async () => {
                          try {
                            await pb.collection('clients').update(client.id, { firstname: client.firstname });
                          } catch (err) {
                            console.error('Error updating record:', err);
                          }
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={client.lastname}
                        onChange={e => {
                          const updatedClient = { ...client, lastname: e.target.value };
                          setClients(clients.map(c => (c.id === client.id ? updatedClient : c)));
                        }}
                        onBlur={async () => {
                          try {
                            await pb.collection('clients').update(client.id, { lastname: client.lastname });
                          } catch (err) {
                            console.error('Error updating record:', err);
                          }
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={client.email}
                        onChange={e => {
                          const updatedClient = { ...client, email: e.target.value };
                          setClients(clients.map(c => (c.id === client.id ? updatedClient : c)));
                        }}
                        onBlur={async () => {
                          try {
                            await pb.collection('clients').update(client.id, { email: client.email });
                          } catch (err) {
                            console.error('Error updating record:', err);
                          }
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={client.phonenumber}
                        onChange={e => {
                          const updatedClient = { ...client, phonenumber: e.target.value };
                          setClients(clients.map(c => (c.id === client.id ? updatedClient : c)));
                        }}
                        onBlur={async () => {
                          try {
                            await pb.collection('clients').update(client.id, { phonenumber: client.phonenumber });
                          } catch (err) {
                            console.error('Error updating record:', err);
                          }
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={client.height}
                        onChange={e => {
                          const updatedClient = { ...client, height: e.target.value };
                          setClients(clients.map(c => (c.id === client.id ? updatedClient : c)));
                        }}
                        onBlur={async () => {
                          try {
                            await pb.collection('clients').update(client.id, { height: client.height });
                          } catch (err) {
                            console.error('Error updating record:', err);
                          }
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={client.weight}
                        onChange={e => {
                          const updatedClient = { ...client, weight: e.target.value };
                          setClients(clients.map(c => (c.id === client.id ? updatedClient : c)));
                        }}
                        onBlur={async () => {
                          try {
                            await pb.collection('clients').update(client.id, { weight: client.weight });
                          } catch (err) {
                            console.error('Error updating record:', err);
                          }
                        }}
                      />
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Editclient
