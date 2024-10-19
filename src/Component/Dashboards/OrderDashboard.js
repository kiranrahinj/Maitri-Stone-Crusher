import React from 'react';
import { Link } from 'react-router-dom';

const OrderDashboard = () => {
  return (
    <div className="flex justify-center p-2">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-2xl md:text-4xl text-gray-800 text-center mb-12 tracking-tight font-extrabold animate-fade-in  transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2  focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r">
          Order Management Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Add New Order */}
          <Link to="/addOrder">
            <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Add New Order</h2>
              <p className="text-sm text-center">Register a new order with all required details</p>
            </div>
          </Link>

          {/* View All Orders */}
          <Link to="/orders">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">View All Orders</h2>
              <p className="text-sm text-center">Access the complete list of all orders</p>
            </div>
          </Link>

          {/* Search Order by Customer Name */}
          <Link to="/get-order-by-customer">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Search by Customer Name</h2>
              <p className="text-sm text-center">Find orders by customer name for quick lookup</p>
            </div>
          </Link>

          {/* Get Order Status */}
          <Link to="/order_status">
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Get Order Status</h2>
              <p className="text-sm text-center">Check the current status of any order</p>
            </div>
          </Link>

          {/* Payment Received */}
          <Link to="/payment-received">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Payment Received</h2>
              <p className="text-sm text-center">Track payments received from customers</p>
            </div>
          </Link>

          {/* Check Payment Status */}
          <Link to="/payment-status">
            <div className="bg-gradient-to-br from-red-400 to-red-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Check Payment Status</h2>
              <p className="text-sm text-center">View the payment status of outstanding orders</p>
            </div>
          </Link>

          {/* Orders Filled By */}
          <Link to="/filled-by">
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Orders Filled By</h2>
              <p className="text-sm text-center">See which team members completed orders</p>
            </div>
          </Link>

          {/* Orders by Date */}
          <Link to="/get-order-by-date">
            <div className="bg-gradient-to-br from-teal-400 to-teal-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Orders by Date</h2>
              <p className="text-sm text-center">Filter and view orders by specific dates</p>
            </div>
          </Link>

          {/* Orders by Date Range */}
          <Link to="/get-order-by-dates">
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center mb-2">Orders by Date Range</h2>
              <p className="text-sm text-center">View orders within a specified date range</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;
