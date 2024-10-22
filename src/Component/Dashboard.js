import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-3xl sm:text-4xl text-gray-900 text-center mb-12 font-extrabold animate-fade-in transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 focus:scale-105 focus:-translate-y-2 focus:shadow-xl">
          Management Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Order Dashboard */}
          <Link to="/order_dash">
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r from-blue-500 to-blue-700">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Order Dashboard</h2>
              <p className="text-md sm:text-lg">Manage and track orders efficiently.</p>
            </div>
          </Link>

          {/* Customer Dashboard */}
          <Link to="/customer_dash">
            <div className="bg-purple-600 text-white rounded-lg p-8 shadow-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r from-purple-500 to-purple-700">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Customer Dashboard</h2>
              <p className="text-md sm:text-lg">Manage information and payments.</p>
            </div>
          </Link>

          {/* Expense Dashboard */}
          <Link to="/expense_dash">
            <div className="bg-green-600 text-white rounded-lg p-8 shadow-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r from-green-500 to-green-700">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Expense Dashboard</h2>
              <p className="text-md sm:text-lg">Keep track of all business expenses.</p>
            </div>
          </Link>

          {/* Profit Dashboard */}
          <Link to="/profit">
            <div className="bg-orange-600 text-white rounded-lg p-8 shadow-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r from-orange-500 to-orange-700">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Profit Dashboard</h2>
              <p className="text-md sm:text-lg">Keep track of payments and profits.</p>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
