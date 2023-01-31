import { nanoid } from '@reduxjs/toolkit';
import {  useState, Fragment } from 'react'
import './tableview.css'

const Team = () => {
    constructor(teamName); {
      this.teamName = teamName;
      this.clients = [];
    }
  
    setTeamName(teamName); {
      this.teamName = teamName;
    }
  
    getTeamName(); {
      return this.teamName;
    }
  
    addClient(client); {
      this.clients.push(client);
    }
  
    removeClient(client); {
      let index = this.clients.indexOf(client);
      if (index > -1) {
        this.clients.splice(index, 1);
      }
    }
  };
  
    return (
      <div className='team-table'>
        
        <h2>Add Team</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input 
            type = 'text'
            name = 'TeamName'
            placeholder='Enter Team Name'
            required = 'required'
            onChange={handleAddFormChange}
          />
           <input 
            type = 'text'
            name = 'Coach'
            placeholder='Enter Coach'
            required = 'required'
            onChange={handleAddFormChange}
          />
          <button type='submit'>Add Team</button>
        </form>
        <h1>Team Manager</h1>
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
              <th>TeamName</th>
              <th>Instructor</th>
              <th>Actions</th>
              </tr>
            </thead>
              <tbody>
              {teams.map((teams) => (
              <Fragment>
                {editTeamID === team.id ? (
                <TeamEditRow editFormData={editFormData} 
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
                />
  
                ) : (
                <TeamReadRow 
                teams={teams}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                />)}
                
          
              </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    );
  
  export default Team;
  
