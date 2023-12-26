import React, { useState, useEffect } from 'react';
import usersData from '../JsonFiles/loginValidation.json';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    // Fetch user data from the JSON file or your API endpoint
    fetch('../JsonFiles/loginValidation.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    // Perform client-side validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Check if the provided username and password are valid
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      setError('Login successful!');
      // You might redirect the user to another page or set an authenticated state
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="">
        <h2 className='text-2xl font-bold'>Log in</h2>
        <p className='mb-8'>Log back in to use our services </p>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className='w-full border-b border-gray-400 mt-2 mb-5 bg-gray-100 p-2 text-sm'
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className='w-full border-b border-gray-400 mt-2 mb-8 bg-gray-100 p-2 text-sm'
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <p className={`px-5 py-2 mb-4 ${error.includes('successful') ? 'text-green-600 bg-green-200' : 'text-red-600 bg-red-200'}`}>{error}</p>
          <button type="submit" className='w-full ms-auto text-left px-5 py-3 flex h-[65px] bg-blue-600 text-white hover:bg-blue-700'>Continue</button>
        </form>
    </div>
  );
};

export default Login;


