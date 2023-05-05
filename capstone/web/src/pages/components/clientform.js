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
      </div>
    </div>
  )
}

export default clientform;
