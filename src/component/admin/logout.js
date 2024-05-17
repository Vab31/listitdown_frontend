import React from 'react';
// import { useHistory } from 'react-router-dom';

const Logout = () => {
//   const history = useHistory();

  const handleLogout = async () => {
    try {
      // Optionally, notify the backend to handle any server-side logout logic
      // const response = await fetch('/api/logout', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   }
      // });
      // if (!response.ok) {
      //   throw new Error('Logout failed');
      // }

      // Remove the token from localStorage
      localStorage.removeItem('token');
      console.log("success")

      // Optionally, clear all localStorage items (if you have other data stored)
      // localStorage.clear();

      // Redirect to the login page or another appropriate location
    //   history.push('/login');
    } catch (error) {
      console.error('Error:', error);
      alert('Logout failed');
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
