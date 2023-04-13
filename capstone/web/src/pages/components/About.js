import React from 'react'
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NavBar from './NavBar';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/router';
import Link from "next/link"

function About() {
  return (
    <div name = 'front-background'>
      <div>
        <NavBar></NavBar>
          <div name = 'about'>
          <h3>The #1 web application to manage your clients.
            FIT will transform your business or team by taking
            the thinking out of training. 
            <br></br>
            <ul>
            <li>Track biometrics.</li>
            <li>Manage whole teams or individuals.</li>
            <li>Create and assign customs workouts.</li>
          </ul></h3> <h3>FIT is what you need to take it to the next level.</h3>
          <br></br>
            <Link name = 'start-link' href="../components/Signupform"><header>GET STARTED WITH FIT</header></Link>
          </div>
      </div>
    </div>
  )
}

export default About;