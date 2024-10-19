import React from 'react';
import { Link } from 'react-router-dom';

const OrderDashboard = () => {
  return (
    <div className="md:mt-10 flex justify-center p-6">
      <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-xl sm:text-4xl text-gray-900 text-center mb-12 font-extrabold animate-fade-in  transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2  focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r">
          Order Management Dashboard
         </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add New Order */}
          <Link to="/addOrder">
            <div className="bg-green-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Add New Order</h2>
            </div>
          </Link>

          {/* View All Orders */}
          <Link to="/orders">
            <div className="bg-blue-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">View All Orders</h2>
            </div>
          </Link>

          {/* Search Order by Customer Name */}
          <Link to="/get-order-by-customer">
            <div className="bg-purple-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Search by Customer Name</h2>
            </div>
          </Link>

          {/* Get Order Status */}
          <Link to="/order_status">
            <div className="bg-pink-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Get Order Status</h2>
            </div>
          </Link>

          {/* Payment Received */}
          <Link to="/payment-received">
            <div className="bg-yellow-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Payment Received</h2>
            </div>
          </Link>

          {/* Check Payment Status */}
          <Link to="/payment-status">
            <div className="bg-red-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Check Payment Status</h2>
            </div>
          </Link>

          {/* Orders Filled By */}
          <Link to="/filled-by">
            <div className="bg-indigo-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Orders Filled By</h2>
            </div>
          </Link>

          {/* Orders by Date */}
          <Link to="/get-order-by-date">
            <div className="bg-teal-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Orders by Date</h2>
            </div>
          </Link>

          {/* Orders by Date Range */}
          <Link to="/get-order-by-dates">
            <div className="bg-pink-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Orders by Date Range</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;
