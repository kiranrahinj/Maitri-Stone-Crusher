import React from 'react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  return (
    <div className="md:mt-10 flex justify-center p-6">
      <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl sm:text-4xl text-gray-900 text-center mb-12 font-extrabold animate-fade-in  transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2  focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r">
          Customer Management Dashboard
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Get All Customers */}
          <Link to="/all_customer">
            <div className="bg-green-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Get All Customers</h2>
            </div>
          </Link>

          {/* Search by Customer Name */}
          <Link to="/customer_name">
            <div className="bg-blue-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Search by Customer Name</h2>
            </div>
          </Link>

          {/* Payment Mode */}
          <Link to="/paymentMode">
            <div className="bg-yellow-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Payment Mode</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
