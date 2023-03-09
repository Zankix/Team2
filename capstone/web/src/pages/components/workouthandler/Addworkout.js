import React from 'react'
import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
const pb = new PocketBase('http://127.0.0.1:8090');

export default function Addworkout() {
  return (
    <div>
      <Topbar></Topbar>
    </div>
  )
}
