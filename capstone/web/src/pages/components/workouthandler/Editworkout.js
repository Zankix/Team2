import Topbar from '../pagecomponents/Topbar'
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const EditWorkout = () => {
    const router = useRouter();
  return (
    <div>
      <Topbar></Topbar>
      <button onClick={() => router.back()}>Back</button>

    </div>
  )
}

export default EditWorkout
