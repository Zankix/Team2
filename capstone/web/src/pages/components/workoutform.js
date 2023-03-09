import React from 'react'
import Topbar from './pagecomponents/Topbar';
import Link from 'next/link';
import PocketBase from 'pocketbase'; 
const pb = new PocketBase('http://127.0.0.1:8090'); 
function workoutform() {

  const tabledata =() =>{
    
  }
  return (
    <div>
      <Topbar></Topbar>
      <div name='workout'>

      </div>
      <Link href={'../components/workouthandler/Addworkout'}><h2>Add Workout</h2></Link>
    </div>
  )
}

export default workoutform
