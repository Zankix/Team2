import Topbar from './pagecomponents/Topbar';
import  Workoutdata  from './workouthandler/Workoutdata';

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

export default function WorkoutForm() {

  return (
    <div>
      <Topbar />
      <Workoutdata></Workoutdata>
      <div name='workout'>
        <button onClick={() => window.location.href = '../components/workouthandler/Addworkout'}>Add Workout</button>
        <button onClick={() => window.location.href = '../components/workouthandler/Editworkout'}>Edit Workout</button>
        <button onClick={() => window.location.href = '../components/workouthandler/Deleteworkout'}>Delete Workout</button>
      </div>
    </div>
  );
}

