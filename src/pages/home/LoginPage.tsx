import React, { useState, SyntheticEvent } from 'react';

// A functional component to create the login page
const LoginPage = () => {
  // State to store the user's inputted email
  const [email, setEmail] = useState('');

  // State to store the user's inputted password
  const [password, setPassword] = useState('');

  // Function to handle when the user submits the form
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;