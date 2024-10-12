// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          My Blog
        </Link>
        <Link to="/create" className="bg-white text-blue-500 px-4 py-2 rounded">
          Create Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
