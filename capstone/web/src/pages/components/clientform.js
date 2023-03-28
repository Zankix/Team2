import React from 'react'
import Topbar from './pagecomponents/Topbar';
import PocketBase from 'pocketbase';

function clientform() {
  const pb = new PocketBase('http://127.0.0.1:8090');

  async function viewclients() {
    try {
      const record = await pb.collection('user').getOne('RECORD_ID', {
        expand: 'username,email',
      });
    } catch (error) {
      alert("No Data");
    }
  }

  return (
    <div>
      <Topbar></Topbar>
      <div name='client'>
        {/* <button onClick={viewclients}>View Clients</button> */}
      <button class="button button-mainpages" onClick={() => {window.location.href = '../components/clienthandler/Addclient';}}>Add Client</button>
      <button class="button button-mainpages"onClick={() => {window.location.href = '../components/clienthandler/Editclient';}}>Edit Client</button>
      <button class="button button-mainpages" onClick={() => {window.location.href = '../components/clienthandler/Deleteclient';}}>Delete Client</button>
    </div></div>
  )
}

export default clientform;
