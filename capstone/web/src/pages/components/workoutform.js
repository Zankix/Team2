import Topbar from './pagecomponents/Topbar';
import { Workoutdata } from './workouthandler/Workoutdata';
import Table from './workouthandler/Workoutdata';
import React, { useEffect, useState } from 'react';

export default function WorkoutForm({ tableData }) {
  return (
    <div>
      <Topbar />
      {/* <Table tabledata={tableData}/> */}
      <div name='workout'>
        <button onClick={() => window.location.href = '../components/workouthandler/Addworkout'}>Add Workout</button>
        <button onClick={() => window.location.href = '../components/workouthandler/Editworkout'}>Edit Workout</button>
        <button onClick={() => window.location.href = '../components/workouthandler/Deleteworkout'}>Delete Workout</button>
      </div>
    </div>
  );
}

