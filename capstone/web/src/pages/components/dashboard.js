import React from 'react'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
const pb = new PocketBase('https://pocketbase.io');

function dashboard() {
    const router = useRouter();

    function logoutreturnhome() {
        pb.authStore.clear();
        router.push('http://localhost:3000');
    }
  return (
    <div>
      <h2>Dashboard placeholder for client and workout forms</h2>
      
      <button onClick={logoutreturnhome}><h3>LOGOUT</h3></button>
    </div>
  )
}

export default dashboard
