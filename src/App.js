import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import User from './pages/User';
import Client from './pages/Client';
import Project from './pages/Project';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/client" element={<Client />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
