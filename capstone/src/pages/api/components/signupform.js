import React from 'react'

//form for sign up
//will add this user to the database and the ability to login
const signupform = () => {
  return (
    <form onSubmit="signuphandler">
        <label>Enter First Name: <input type="text" /> </label>
        <label>Enter Last Name: <input type="text" /> </label>
        <label>Enter Email: <input type="text" /> </label>
        <label>Enter Date of Birth: <input type="text" /> </label>
        <label>Enter Address: <input type="text" /> </label>
        <label>Enter Phone Number: <input type="text" /> </label>
        <></>
        {/* login information */}
        <label>Enter Username: <input type="text" /> </label>
        <label>Enter Password: <input type="password" /> </label>
        <label>Re-Enter Password: <input type="password" /> </label>

    </form>
  )
}
// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<signupform/>);
export default signupform
