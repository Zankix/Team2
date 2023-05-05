import Topbar from './pagecomponents/Topbar';
import  Workoutdata  from './workouthandler/Workoutdata';

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090', { timeout: 5000 });

export default function WorkoutForm() {

  return (
    <div>
      <Topbar />
      <h1 className="h1 titles">Current Workouts</h1>
      <Workoutdata></Workoutdata>
      <div name='client'>
      </div>
    </div>
  );
}

