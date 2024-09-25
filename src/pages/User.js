import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUserName } from '../redux/slices/userSlice';

const User = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);

  const handleSetName = () => {
    const name = prompt('Enter your name:');
    if (name) {
      dispatch(setUserName(name));
    }
  };

  return (
    <div>
      <h1>User Page</h1>
      <p>User Name: {userName || 'No name set'}</p>
      <button onClick={handleSetName}>Set User Name</button>
    </div>
  );
};

export default User;
