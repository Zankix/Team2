import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Workoutdata from './Workoutdata'
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

const EditWorkout = () => {
    const router = useRouter();
  return (
    <div>
      <Topbar></Topbar>
      <button class="button button-mainpages" onClick={() => router.back()}>Back</button>
      <h1 class="h1 titles">Edit Workouts</h1>
      <Workoutdata></Workoutdata>
    </div>
  )
}

export default EditWorkout
