import React from 'react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  return (
    <div className="flex justify-center p-2">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-2xl md:text-4xl text-gray-800 text-center mb-12 tracking-tight font-extrabold animate-fade-in  transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2  focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r">
          Customer Management Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Get All Customers */}
          <Link to="/all_customer">
            <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Get All Customers</h2>
              <p className="text-sm text-center">View the complete list of registered customers</p>
            </div>
          </Link>

          {/* Search by Customer Name */}
          <Link to="/customer_name">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Search by Customer Name</h2>
              <p className="text-sm text-center">Find customers by their name quickly</p>
            </div>
          </Link>

          {/* Payment Mode */}
          <Link to="/paymentMode">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Payment Method</h2>
              <p className="text-sm text-center">Check the payment methods used by customers</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
