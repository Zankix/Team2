import React from 'react'
import Topbar from './pagecomponents/Topbar';
import Clientdata from './clienthandler/Clientdata';


function clientform() {
 
  return (
    <div>
      <Topbar/>
      <h1 className="h1 titles">Clients</h1>
      <Clientdata></Clientdata>
      <div name='client'>
          {/* <button onClick={viewclients}>View Clients</button> */}
        <button className="button button-mainpages" onClick={() => {window.location.href = '../components/clienthandler/Addclient';}}>Add Client</button>
        <button className="button button-mainpages"onClick={() => {window.location.href = '../components/clienthandler/Editclient';}}>Edit Client</button>
        <button className="button button-mainpages" onClick={() => {window.location.href = '../components/clienthandler/Deleteclient';}}>Delete Client</button>
      </div>
    </div>
  )
}

export default clientform;
