import React from 'react'

import Link from "next/link"

function NavBar() {
  return (
    <div>
        <Link href="../components/Loginform"><h1>Login</h1></Link>
        <Link href="../components/Signupform"><h1>Signup</h1></Link>
        <Link href='/'><h1>Home</h1></Link>
        <Link href='http://localhost:3001/'>Check Server (click return arrow to return to this menu)</Link>
        {/* <Link href="/Profile"><h1>Profile</h1></Link> */}
    </div>
  )
}

export default NavBar
