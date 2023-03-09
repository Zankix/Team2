import React from 'react'
import Topbar from './pagecomponents/Topbar';
import PocketBase from 'pocketbase';
import Link from 'next/link';

 function clientform() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  
  async function viewclients(){
    try {
      const record = await pb.collection('user').getOne('RECORD_ID', {
      expand: 'username,email',
      });
    } catch (error){
      alert("No Data");
    }
  }
  return (
    <div>
      <Topbar></Topbar>
     <div name='client'>
      {/* <button onClick={viewclients}>View Clients</button> */}
     </div>
     <Link href={'../components/clienthandler/Addclient'}><h2>Add Client</h2></Link>
    </div>
  )
}

export default clientform
