import React from 'react'
import Topbar from './pagecomponents/Topbar';
import Clientdata from './clienthandler/Clientdata';


function clientform() {
 
  return (
    <div>
      <Topbar></Topbar>
      <Clientdata></Clientdata>
      <div name='client'>
        {/* <button onClick={viewclients}>View Clients</button> */}
      </div>
      <button onClick={() => {window.location.href = '../components/clienthandler/Addclient';}}>Add Client</button>
      <button onClick={() => {window.location.href = '../components/clienthandler/Editclient';}}>Edit Client</button>
      <button onClick={() => {window.location.href = '../components/clienthandler/Deleteclient';}}>Delete Client</button>
    </div>
  )
}

export default clientform;
