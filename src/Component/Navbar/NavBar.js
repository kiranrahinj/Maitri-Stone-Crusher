import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo or Site Title */}
        <div className="text-2xl font-extrabold hover:text-gray-300 transition">
          <Link to="/dashboard">Maitri Stone Crusher</Link>
        </div>

        {/* Login Link */}
        <div>
          <Link to="/login" className="text-lg font-semibold hover:text-gray-300 transition">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
