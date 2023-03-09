import Topbar from './pagecomponents/Topbar';
import {Workoutdata} from './workouthandler/Workoutdata'
import Table from './workouthandler/Workoutdata'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
export default function workoutform({tableData}) {
  
  return (
    <div>
      <Topbar></Topbar>
      <Table tabledata={tableData}/>
      <div name='workout'>
      <Link href={'../components/workouthandler/Addworkout'}><h2>Add Workout</h2></Link>

      </div>
</div>
   
  )
}
async function getStaticProps(){
  const tableData = await Workoutdata();
  return {
    prop: {
      tableData
    }
  };
}
