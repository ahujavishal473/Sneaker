import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../css/Signin.css';
import { Link } from 'react-router-dom';

function SignIn() {
    const navigate=useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://baby-blue-scallop-yoke.cyclic.app/login', credentials);

      if (response && response.data) {
        // Successful sign-in
        const { userObj, auth } = response.data;
        localStorage.setItem('user', JSON.stringify(userObj));
        localStorage.setItem('token', auth);
        navigate('/');
      } else {
        console.error('Invalid response from server');
      }

    } catch (error) {
      console.error('Error signing in:', error.response.data.msg);
    }
  };

  return (
    <>
    <div className='form'>
    <form className='signin-form'>
      <h3>Sign In</h3>
      <div className='input-field' >
        <label>Username</label>
        <input 
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleOnChange}
        />
      </div>
      <div className='input-field'>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleOnChange}
        />
      </div>
      <div className='submit-button'>
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
      <Link to="/signup">Create a account click here</Link>
    </form>
    </div>
    </>
   
    
  );
}

export default SignIn;