import React from 'react'
import useLogout from '../hooks/useLogout';

function Topbar() {
    const logout = useLogout();
  return (
    <div name="topbar">
  <ul>
    <li><a name="topbar-link" href="/components/dashboard">Home</a></li>
    <li><a name="topbar-link" href="/components/clientform">Manage Clients</a>
    <ul>
        <li><a href="/components/clienthandler/Addclient">Add Client</a></li>
        <li><a href="/components/clienthandler/Editclient">Edit Client</a></li>
        <li><a href="/components/clienthandler/Deleteclient">Delete Client</a></li>
      </ul></li>
    <li><a name="topbar-link" href="/components/workoutform">Manage Workouts</a>
    <ul>
        <li><a href="/components/workouthandler/Addworkout">Add Workout</a></li>
        <li><a href="/components/workouthandler/Editworkout">Edit Workout</a></li>
        <li><a href="/components/workouthandler/Deleteworkout">Delete Workout</a></li>
      </ul></li>
    <li><a onClick={logout}>Logout</a></li>
  </ul>
</div>
  )
}

export default Topbar
