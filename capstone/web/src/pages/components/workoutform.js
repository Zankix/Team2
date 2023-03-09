import React from 'react'
import Topbar from './pagecomponents/Topbar';
import Link from 'next/link';
function workoutform() {
  return (
    <div>
      <Topbar></Topbar>
      <div name='workout'>
      <Link href={'../components/workouthandler/Addworkout'}><h2>Add Workout</h2></Link>
      </div>
</div>
   
  )
}

export default workoutform
