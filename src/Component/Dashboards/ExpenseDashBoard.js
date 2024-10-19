import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseDashboard = () => {
  return (
    <div className="md:mt-10 flex justify-center p-6">
      <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl sm:text-4xl text-gray-900 text-center mb-12 font-extrabold animate-fade-in  transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2  focus:scale-105 focus:-translate-y-2 focus:shadow-xl active:bg-gradient-to-r">
          Expense Management Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Get All Expense */}
          <Link to="/all_expense">
            <div className="bg-green-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Get All Expense</h2>
            </div>
          </Link>

          {/* Get Expense by Date */}
          <Link to="/expense_by_date">
            <div className="bg-red-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Get Expense by Date</h2>
            </div>
          </Link>

          {/* Expense Paid By */}
          <Link to="/expense_paid_by">
            <div className="bg-purple-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Expense Paid By</h2>
            </div>
          </Link>

          {/* Diesel Paid By */}
          <Link to="/disel_paid_by">
            <div className="bg-orange-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
              <h2 className="text-lg font-semibold text-center">Diesel Paid By</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDashboard;
