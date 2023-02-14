import React from 'react'

import Link from "next/link"

function NavBar() {
  return (
    <div>
        DEV LAYOUT
        <Link href="../components/Loginform"><h1>Login</h1></Link>
        <Link href="../components/Signupform"><h1>Signup</h1></Link>
        <Link href='/'><h1>Home</h1></Link>
        <Link href='http://127.0.0.1:8090'> Server connection test (click return arrow to return to this menu)</Link>
        {/* <Link href='https://ciscapstone.atlassian.net/jira/software/projects/T2/boards/1'><h3>JiraLink</h3></Link> */}
    </div>
  )
}


export default NavBar
