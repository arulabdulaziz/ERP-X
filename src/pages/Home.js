import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/user">User</Link> | <Link to="/client">Client</Link> | <Link to="/project">Project</Link>
      </nav>
    </div>
  );
};

export default Home;
