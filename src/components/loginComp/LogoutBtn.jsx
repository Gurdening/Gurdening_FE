import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('authToken'); // Replace 'authToken' with whatever you've named your token
    // Or if using a global state management
    // dispatch(logoutUserAction());

    navigate('/home');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutBtn;
