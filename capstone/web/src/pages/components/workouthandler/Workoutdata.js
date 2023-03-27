import React from 'react';
import PocketBase from 'pocketbase';

export default function Table({ tabledata }) {
    if (!tabledata) {
      return <p>Loading..</p>;
    }
  
    return (
      <table>
        <thead>
          <tr>
            <th>Workout Name</th>
            <th>Workout Focus</th>
            <th>Workout Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((row) => (
            <tr key={row.id}>
              <td>{row.workoutname}</td>
              <td>{row.workoutfocus}</td>
              <td>{row.workoutdescription}</td>
              <td>{row.workoutdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export async function getStaticProps() {
    try {
      const pb = new PocketBase('http://127.0.0.1:8090');
      const data = await pb.get('workouts');
      const tableData = data
        ? data.map((item) => ({
            workoutname: item.fields.workoutname,
            workoutdescription: item.fields.workoutdescription,
            workoutfocus: item.fields.workoutfocus,
            workoutdate: item.fields.workoutdate,
          }))
        : [];
  
      return {
        props: {
          tabledata: tableData,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        props: {
          tabledata: undefined,
        },
      };
    }
}
