import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/user">User</Link> | <Link to="/client">Client</Link> | <Link to="/project">Project</Link>
      </nav>
      <h1 className="text-primary text-4xl font-bold">Hello world! I am using React</h1>;
    </div>
  );
};

export default Home;
