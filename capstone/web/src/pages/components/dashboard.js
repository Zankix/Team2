import React from 'react'
import Topbar from './pagecomponents/Topbar';
function dashboard() {
  return (
    <div >
        <Topbar></Topbar>
        <div name = 'home'>
            <img src="/fitt.png"></img>
          <h1>Welcome to FIT!</h1> 
          <br></br>
        </div>
    </div>
  );
}

export default dashboard;
