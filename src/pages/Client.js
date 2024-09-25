import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addClient } from '../redux/slices/clientSlice';

const Client = () => {
  const dispatch = useDispatch();
  const listClient = useSelector((state) => state.client.clients);

  const handleAddClient = () => {
    const name = prompt('Enter your client name:');
    if (name) {
      dispatch(addClient(name));
    }
  };

  return (
    <div>
      <h1>Client Page</h1>
      <p>List Client: {JSON.stringify(listClient) || 'No client'}</p>
      <button onClick={handleAddClient}>Add Client</button>
    </div>
  );
};

export default Client;
