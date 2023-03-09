import React from 'react' 

import NavBar from './components/NavBar' 

import Link from "next/link" 

 
 

function Home() { 

  return ( 

    <div> 

      <NavBar></NavBar> 

      <div name = 'home'> 

        <img src="fitt.png"></img> 

      <h1>Welcome to FIT!</h1> 

      <br></br> 

      <h2>The #1 web application to manage your clients.</h2> 

      <br></br> 

        <Link name = 'start-link' href="../components/Signupform"><header>GET STARTED WITH FIT</header></Link> 

         

     

    </div></div> 

     

  ) 

} 

 
 

export default Home 