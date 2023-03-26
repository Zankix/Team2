import React from 'react'
import Link from "next/link"

function NavBar() {
  return (
   
      <div name = 'navbar'>
        <Link name = 'my-link' href='/'><h1>HOME</h1></Link>
        <Link name = 'my-link' href="../components/Loginform"><h1>LOGIN</h1></Link>
        <Link name = 'my-link' href="../components/Signupform"><h1>SIGN UP</h1></Link>
        <Link name = 'my-link' href="../components/About"><h1>ABOUT</h1></Link>
      </div>
     
  )
}
<Link href='http://127.0.0.1:8090'> Server connection test (click return arrow to return to this menu)</Link>
        {/* <Link href='https://ciscapstone.atlassian.net/jira/software/projects/T2/boards/1'><h3>JiraLink</h3></Link> */}

export default NavBar;
