import React from 'react'
import useLogout from '../hooks/useLogout';

function Topbar() {
    const logout = useLogout();
  return (
    <div name ='topbar'>
        <a name = 'topbar-link' href='/components/dashboard'>Home</a>
        <a name = 'topbar-link' href='/components/clientform'>Manage Clients</a>
        <a name = 'topbar-link' href='/components/workoutform'>Manage Workouts</a>
        <a onClick={logout}  >Logout</a>
    </div>
  )
}

export default Topbar
