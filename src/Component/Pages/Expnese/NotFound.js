import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page not found</p>
        <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>

        <Link
          to="/dashboard"
          className="mt-6 inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
