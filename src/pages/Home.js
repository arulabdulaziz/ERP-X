import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/user">User</Link> | <Link to="/client">Client</Link> |{" "}
        <Link to="/project">Project</Link>
      </nav>
      <div className="min-h-screen flex items-center justify-center bg-blue-500 text-white">
        <h1 className="text-4xl font-bold cursor-pointer">Hello, Tailwind CSS!</h1>
      </div>
    </div>
  );
};

export default Home;
