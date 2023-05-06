import React from 'react'
import Topbar from './pagecomponents/Topbar';
import Workoutdata from './workouthandler/Workoutdata'
import Clientdata from './clienthandler/Clientdata';

function dashboard() {
  return (
    <div >
        <Topbar></Topbar>
        <div name = 'home'>
            
          <h1>Welcome to FIT!</h1> 
          
        </div>
 
        <h1 className='h1 titles'>Current Workouts</h1>
        <Workoutdata></Workoutdata>
        <h1 className='h1 titles'>Clients</h1>
        <Clientdata></Clientdata>
    </div>
  );
}

export default dashboard;
