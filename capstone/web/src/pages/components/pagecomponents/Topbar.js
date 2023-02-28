import React from 'react'
import useLogout from '../hooks/useLogout';

function Topbar() {
    const logout = useLogout();
  return (
    <div className="topbar">
        <a href='/components/dashboard'>Home</a>
        <a href='/components/clientform'>Manage Clients</a>
        <a href='/components/workoutform'>Manage Workouts</a>
        <a onClick={logout}  >Logout</a>
    </div>
  )
}

export default Topbar
